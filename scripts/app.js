import '../style/main.scss';
import menus from './menus';
import animal from './animal';
import teacher from './teacher';
import quotes from './quotes.js';
const initApp = () => {
  try {
    menus();
  } catch (error) {}
  try {
    animal();
  } catch (error) {}
  try {
    teacher();
  } catch (error) {}
  try {
    quotes();
  } catch (error) {}
};

document.addEventListener('DOMContentLoaded', initApp);
