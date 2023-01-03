import "../style/main.scss"
import splashscreen from './splashscreen.js';
const initApp=()=>{

    
    try {
        splashscreen();
    } catch (error) {
        
    }
}

document.addEventListener('DOMContentLoaded', initApp);