const menus = () => {
  const petMenuButton = document.querySelector('#petMenuButton');
  const mainmenu = document.querySelector('#mainmenu');
  const petMenu = document.querySelector('#petMenu');
  const dropdownbtn = document.querySelector('.dropbtn');
  const dropupcontent = document.querySelector('.dropup-content');
  let open = false;
  petMenuButton.addEventListener('click', () => {
    mainmenu.style.opacity = 0;
    setTimeout(() => {
      mainmenu.classList.add('hidden');
      petMenu.classList.remove('hidden');
    }, 610);
  });

  dropdownbtn.addEventListener('click', () => {
    if (open) {
      dropupcontent.classList.add('hidden');
      open = false;
    } else {
      dropupcontent.classList.remove('hidden');
      open = true;
    }
  });
};
export default menus;
