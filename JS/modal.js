import { destinations } from './destinations.js';
import { userData } from './userdata.js';
// Modal
const colorBtns = document.querySelectorAll('.color-btn'),            
      btnContinue = document.querySelectorAll('.continue'),
      btnBack = document.querySelectorAll('.back'),    
      resetBtn = document.querySelector('.reset'),
      btnComplete = document.querySelector('.complete'),
      userNameInput = document.querySelector('#name'),
      placeInputs = document.querySelectorAll('.inputs select');

// Prevents body scrolling when modal is open
const modal = document.querySelector('.modal'),
      body = document.querySelector('body');

if (!modal.classList.contains('d-none')) {
    body.classList.toggle('fixed')
} 

    

let currentModal = '',
    count = 0,
    btnsArray = [...btnContinue];  

// Removes and adds d-none class on slides
const moveModals = () => {
    const modals = document.querySelectorAll('.modal-contents');
    for (const i of modals) {       
        if (!i.classList.contains('d-none')) {
            currentModal = i;                
        }
    };
    currentModal.classList.add('d-none');
};

// Checks to see if input has value
let btnContinueDisabled = (index, num) => {
    if (index.value !== '') {
        btnContinue[num].disabled = false;
    } else {
        btnContinue[num].disabled = true;
    }
}

// Removes disabled from continue button only when the input contains text
userNameInput.addEventListener('keyup', function(i) {
    btnContinueDisabled(i, 0)
});

// Checks to see if a user has selected an option, if not then continue button is disabled
for (const i of placeInputs) {
    i.addEventListener('change', () => {
        btnContinueDisabled(i, 1)
    });
};


// Saves the user inputs
const saveUserInput = () => {
    userData.name = userNameInput.value;
    userData.place1 = placeInputs[0].value
    userData.place2 = placeInputs[1].value
    userData.place3 = placeInputs[2].value
    userData.place4 = placeInputs[3].value
    userData.place5 = placeInputs[4].value

    for (const i of colorBtns) {
        if (i.classList.contains('clicked')) {
            userData.color = i.getAttribute('data-hex');
        }
    }
};

// Shows error message
let showErrorMsg = () => {
    const  errorMsg = document.querySelectorAll('.error-message');
    errorMsg[count].classList.remove('d-none');
} ;

// Functionality for continue buttons
    //First continue button
btnsArray[0].addEventListener('click', (e) => {
    e.preventDefault();
      if (userNameInput.value === '') {
        showErrorMsg()
    } else {
        moveModals(); 
        currentModal.nextElementSibling.classList.remove('d-none');
        count++;   
    }
});


// Checks to see if a destination option has been selected, if not then continue button is disabled
const checkInputs = () => {
    for (const i of placeInputs) {       
        if (i.value === '--Please select an option--') {
            return false
        } else {
            return true
        }
    };
};

//Second continue button
btnsArray[1].addEventListener('click', (e) => {
    e.preventDefault();
    if (!checkInputs()) {
        showErrorMsg()
    } else {
        moveModals(); 
        currentModal.nextElementSibling.classList.remove('d-none');      
        count++;   
    }
});


// If a color button is not clicked, error message shows. If a color button is clicked, removes modal
let checkClicked = () => {
        for (const i of colorBtns) {        
            if (i.classList.contains('clicked')) {
                modal.classList.add('d-none');   
                body.classList.toggle('fixed')
            } else {
                showErrorMsg()
            }
        };
}

// Removes clicked class from all buttons
let removeClicked = () => {
    for (const i of colorBtns) {
        i.classList.remove('clicked');       
    };
};

// Envoked above function, then adds clicked class to clicked button
for (const i of colorBtns) {
    i.addEventListener('click', () => {
        removeClicked()
        i.classList.toggle('clicked');
    });
};


// Functionality for back button
for (const i of btnBack) {
    i.addEventListener('click', (e) => {       
        count--;     
        e.preventDefault();    
        moveModals();
        currentModal.previousElementSibling.classList.remove('d-none');
    });
};


//Saves the destinations object names in an array
let destinationNames = [];
for (let key in destinations) {
    if (Object.hasOwnProperty.call(destinations, key)) {
        let element = destinations[key];
        destinationNames.push(element.name);   
    }
}
// Fills in the drop downs based off of the destinations object content
for (let i of placeInputs) {
    for (const j of destinationNames) {
        let text = `<option selected value="${j}">${j}</option>`
    i.insertAdjacentHTML('afterbegin',text);
    }
 }

// Creates empty array of selected destinations
let selectedInputs = [];
// Pushes selected destinations into the array
for (const i of placeInputs) {
    i.addEventListener('change', () => {       
        selectedInputs.push(i.value);
        i.disabled = true;
    });
}

// If an option is already selected it becomes disabled in the list
for (const i of placeInputs) {
    i.addEventListener('mouseover', () => {
        let options = i.options;
        for (const i of options) {
            if (selectedInputs.includes(i.value)) {
                i.disabled = true;
            }             
        }
    });
};

// Resets the destination choices
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    selectedInputs = [];
    for (const i of placeInputs) {
        let options = i.options;
        i.disabled = false;
        i.value = '--Please select an option--';       
        for (const i of options) {            
            i.disabled = false;                      
        }
    };
})



export { checkClicked, saveUserInput, btnComplete }