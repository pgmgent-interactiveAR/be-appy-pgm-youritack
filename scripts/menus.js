const menus = () => {
  const mainmenu = document.querySelector('#mainmenu');
  const dancingTeacherMenu = document.querySelector('#dancingTeacherMenu');
  const dancingTeacherMenuButton = document.querySelector('#dancingTeacherMenuButton');
  const petMenuButton = document.querySelector('#petMenuButton');
  const petMenu = document.querySelector('#petMenu');
  const dropdownbtn = document.querySelector('.dropbtn');
  const dropupcontent = document.querySelector('.dropup-content');
  const dropdownbtnTeacher = document.querySelector('.dropbtnTeacher');
  const dropupcontentTeacher = document.querySelector('.dropup-contentTeacher');
  let open = false;
  petMenuButton.addEventListener('click', () => {
    mainmenu.style.opacity = 0;
    setTimeout(() => {
      mainmenu.classList.add('hidden');
      petMenu.classList.remove('hidden');
    }, 610);
  });
  dancingTeacherMenuButton.addEventListener('click', () => {
    mainmenu.style.opacity = 0;
    setTimeout(() => {
      mainmenu.classList.add('hidden');
      dancingTeacherMenu.classList.remove('hidden');
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
  dropdownbtnTeacher.addEventListener('click', () => {
    if (open) {
      dropupcontentTeacher.classList.add('hidden');
      open = false;
    } else {
      dropupcontentTeacher.classList.remove('hidden');
      open = true;
    }
  });
  
};
export default menus;
