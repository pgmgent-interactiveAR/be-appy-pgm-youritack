import personUrl from './Helena-lowres-animations.glb?url';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
const clock = new THREE.Clock();
let mixers = [];
let targetObject=null;
const teacher = () => {
  const init = () => {
    console.log(navigator.xr);
    if (navigator.xr) {
      document
        .querySelector('#dancingTeacherMenuButton')
        .addEventListener('click', activateXR);
    } else {
      alert('not comp');
    }
  };
  let delta = 0;

  const activateXR = async () => {
    // create canvas and initialize WebGL Context
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const gl = canvas.getContext('webgl2', { xrCompatible: true });

    // create scene to draw object on
    const scene = new THREE.Scene();

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
    const loader = new GLTFLoader();
    let reticle;
    loader.load(
      'https://immersive-web.github.io/webxr-samples/media/gltf/reticle/reticle.gltf',
      function (gltf) {
        reticle = gltf.scene;
        reticle.visible = false;
        scene.add(reticle);
      }
    );
    let clips = null;
    let animal;
    loader.load(personUrl, function (gltf) {
      animal = gltf.scene;
      // animal.position.set(0,0,-2);
      clips = gltf.animations;
      console.log(clips);
      animal.scale.set(0.001, 0.001, 0.001);
      animal.rotateY(-90);
      animal.visible = true;
      // scene.add(animal);


    });

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      preserveDrawingBuffer: true,
      canvas: canvas,
      context: gl,
    });

    renderer.autoClear = false;

    const camera = new THREE.PerspectiveCamera();
    camera.matrixAutoUpdate = false;

    const session = await navigator.xr.requestSession('immersive-ar', {
      optionalFeatures: ['dom-overlay'],
      requiredFeatures: ['hit-test'],
      domOverlay: { root: document.getElementById('teachermenuDom') },
    });

    session.updateRenderState({
      baseLayer: new XRWebGLLayer(session, gl),
    });
    const addAsset = document.querySelector('#addTeacher');

    const playanimation = document.querySelectorAll('.playanimation');
    playanimation.forEach((el) =>
    el.addEventListener('click', (event) => {
      startDance(event.target.value);
    })
  );




    addAsset.addEventListener('click', (event) => {
      if (animal) {
        const clone = SkeletonUtils.clone(animal);
        clone.position.copy(reticle.position);
        const mixer = new THREE.AnimationMixer(clone);
        let skeleton = new THREE.SkeletonHelper(clone);
        skeleton.visible = false;
  
        // Play a specific animation
        const clip = THREE.AnimationClip.findByName(clips, 'idle');
        const action = mixer.clipAction(clip);
        mixers.push(mixer);
  
        action.play();
        scene.add(clone);
        scene.add(skeleton);
      }
    });

    const startDance = (dance) => {
      mixers.forEach((mixer, index) => {
          mixer.stopAllAction();
          console.log(mixer.getRoot());
          const clip = THREE.AnimationClip.findByName(clips, dance);
          mixer.clipAction(clip).play();
        
      });
    };


    const referenceSpace = await session.requestReferenceSpace('local');

    const viewerSpace = await session.requestReferenceSpace('viewer');

    const hitTestSource = await session.requestHitTestSource({
      space: viewerSpace,
    });

    const onXRFrame = (time, frame) => {
      session.requestAnimationFrame(onXRFrame);
      delta = clock.getDelta();
      mixers.forEach((mixer, index) => {
        mixer.update(delta);
      });
      gl.bindFramebuffer(
        gl.FRAMEBUFFER,
        session.renderState.baseLayer.framebuffer
      );

      const pose = frame.getViewerPose(referenceSpace);

      if (pose) {
        const view = pose.views[0];

        const viewport = session.renderState.baseLayer.getViewport(view);
        renderer.setSize(viewport.width, viewport.height);

        camera.matrix.fromArray(view.transform.matrix);
        camera.projectionMatrix.fromArray(view.projectionMatrix);
        camera.updateMatrixWorld(true);

        const hitTestResults = frame.getHitTestResults(hitTestSource);
        if (hitTestResults.length > 0 && reticle) {
          const hitPose = hitTestResults[0].getPose(referenceSpace);
          reticle.visible = true;
          reticle.position.set(
            hitPose.transform.position.x,
            hitPose.transform.position.y,
            hitPose.transform.position.z
          );
          reticle.updateMatrixWorld(true);
        }
        renderer.render(scene, camera);
      }
    };
    session.requestAnimationFrame(onXRFrame);

    document.querySelector('#closeTeacher').addEventListener('click',()=>{
      document.querySelector('#dancingTeacherMenu').classList.add('hidden');
      document.querySelector('#mainmenu').classList.remove('hidden');
      document.querySelector('#mainmenu').style.opacity = 1;
      session.end();

      
    })

  };


  init();
};

export default teacher;
