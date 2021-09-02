import { backToTop } from './backToTop.js';
import { checkClicked, saveUserInput, btnComplete } from './modal.js';
import { addUserData, addPlaces, addNavLinks, highLightFocus } from './createPage.js';
import { menuClickEvent } from './topMenu.js';


backToTop();
menuClickEvent();
highLightFocus();

// Functionality for complete buttons
btnComplete.addEventListener('click', function(e) {
    e.preventDefault();
    addNavLinks();
    checkClicked();
    saveUserInput();
    addUserData();
    addPlaces();
});


