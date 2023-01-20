import "../style/main.scss"
import menus from "./menus";
import splashscreen from './splashscreen.js';
import animal from "./animal";
const initApp=()=>{

    
    try {
        splashscreen();
    } catch (error) {
        
    }
    try {
        menus();
    } catch (error) {
        
    }
       try {
        animal();
    } catch (error) {
        
    }
    
}

document.addEventListener('DOMContentLoaded', initApp);