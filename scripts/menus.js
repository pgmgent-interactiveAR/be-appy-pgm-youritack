const menus = () => {
 const petMenuButton = document.querySelector('#petMenuButton');
 const mainmenu = document.querySelector("#mainmenu");
 const petMenu = document.querySelector("#petMenu");

 petMenuButton.addEventListener("click",()=>{
  mainmenu.style.opacity=0;
  setTimeout(() => {
    mainmenu.classList.add("hidden");
    petMenu.classList.remove("hidden");
    }, 610);
})
  
  
  };
  export default menus;