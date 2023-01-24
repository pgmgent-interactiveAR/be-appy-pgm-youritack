const quotes = () => {
const backgrounds=[
    'mountain.jpg',
    'space.jpg',
    'tree.jpg',
    'waterfall.jpg'
]
const quotes=[
    'It’s not a bug; it’s an undocumented feature',
    'Code is like humor. When you have to explain it, it’s bad',
    'Software is like sex: it’s better when it’s free',
    'Software and cathedrals are much the same — first we build them, then we pray'
]
const background = backgrounds[Math.floor(Math.random()*backgrounds.length)];
const randomquote = quotes[Math.floor(Math.random()*quotes.length)];
const image = document.querySelector('#my-image');
const quote = document.querySelector('#quote');
const refresh = document.querySelector('#refresh');
image.src=`../public/backgrounds/${background}`
quote.setAttribute('value',randomquote)

refresh.addEventListener('click',()=>{
    const background = backgrounds[Math.floor(Math.random()*backgrounds.length)];
const randomquote = quotes[Math.floor(Math.random()*quotes.length)];
const image = document.querySelector('#my-image');
const quote = document.querySelector('#quote');
console.log(image);
image.src=`./public/backgrounds/${background}`;
quote.setAttribute('value',randomquote);
})


  };
  export default quotes;
  