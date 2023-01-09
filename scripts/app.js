import "../style/main.scss"
import menus from "./menus";
import splashscreen from './splashscreen.js';
const initApp=()=>{

    
    try {
        splashscreen();
    } catch (error) {
        
    }
    try {
        menus();
    } catch (error) {
        
    }
    
}

document.addEventListener('DOMContentLoaded', initApp);