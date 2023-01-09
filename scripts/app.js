import "../style/main.scss"
import menus from "./menus";
import splashscreen from './splashscreen.js';
import app from "./ar";
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
        app();
    } catch (error) {
        
    }
    
}

document.addEventListener('DOMContentLoaded', initApp);