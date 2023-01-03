const splashscreen = () => {
  const splashscreen = document.querySelector(".splash");
  const hideSplash = document.querySelector("#hideSplash");

  hideSplash.addEventListener("click",()=>{

    splashscreen.style.opacity=0;
    setTimeout(() => {
        splashscreen.classList.add("hidden");
      }, 610);
  })


};
export default splashscreen;