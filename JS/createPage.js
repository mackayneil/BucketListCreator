import { destinations } from './destinations.js';
import { userData } from './userdata.js';

const navItems = document.querySelector('#nav-items');
let userSelectedPlaces = [];


// Create nav items and appends them to the nav bar
const addNavLinks = () => {
    for (let i = 0; i < 5; i++) {
        let navItem =  document.createElement('li'),
        navLink = document.createElement('a');
        navItems.append(navItem);
        navItem.appendChild(navLink)  
    };
};

const highLightFocus = () => {
    window.addEventListener('scroll', function() {        
        const placeContainer = document.querySelectorAll('.place-container');  
        for (const i of placeContainer) {           
            if (i.getBoundingClientRect().top <= 450 && i.getBoundingClientRect().top >= -350) {
               i.classList.remove('opacity')
            } else {
                i.classList.add('opacity')
            }
        }
    })
}

// Fills user data into the page
const setName = () => {
    const username = document.querySelector('#user-name');
    username.innerHTML = userData.name;
};

const setNavItems = () => {
    navItems.children[0].firstElementChild.setAttribute('data-text', userData.place1);
    navItems.children[0].firstElementChild.innerHTML = userData.place1;
    navItems.children[0].firstElementChild.setAttribute('href', `#${userData.place1}`);

    navItems.children[1].firstElementChild.setAttribute('data-text', userData.place2);
    navItems.children[2].firstElementChild.setAttribute('data-text', userData.place3);
    navItems.children[3].firstElementChild.setAttribute('data-text', userData.place4);
    navItems.children[4].firstElementChild.setAttribute('data-text', userData.place5);


   
    navItems.children[1].firstElementChild.innerHTML = userData.place2;
    navItems.children[2].firstElementChild.innerHTML = userData.place3;
    navItems.children[3].firstElementChild.innerHTML = userData.place4;
    navItems.children[4].firstElementChild.innerHTML = userData.place5;

   
    navItems.children[1].firstElementChild.setAttribute('href', `#${userData.place2}`);
    navItems.children[2].firstElementChild.setAttribute('href', `#${userData.place3}`);
    navItems.children[3].firstElementChild.setAttribute('href', `#${userData.place4}`);
    navItems.children[4].firstElementChild.setAttribute('href', `#${userData.place5}`);
};

const setPlace = () => {
    userSelectedPlaces = [userData.place1, userData.place2, userData.place3, userData.place4, userData.place5];
};

const setColor = () => {
    const root= document.documentElement;
    root.style.setProperty('--color-accent', userData.color);
};

const addUserData = () => {
    
    setName();
    setNavItems();
    setPlace();
    setColor();  
};

const addPlaces = () => {
    let  allPlaces = document.querySelector('.all-places'),
         text = '';
    for (const i of userSelectedPlaces.reverse()) {
        let place = i.replace(/\s/g, "").toLowerCase();
        if(userSelectedPlaces.indexOf(i) % 2 === 0) {
            text = `<section class="place-container opacity" id="${i}">
                        <div class="left">
                            <h2 class="place-name">${destinations[place].name}</h2>
                            <p class="place-description">${destinations[place].info}</p>
                            <ul class="place-facts">
                                <li>
                                    <p><strong>Fact 1</strong></p>
                                    <p>${destinations[place].fact1}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 2</strong></p>
                                    <p>${destinations[place].fact2}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 3</strong></p>
                                    <p>${destinations[place].fact3}</p>
                                </li>
                            </ul>
                        </div>  
                        <figure class="place-image left-gradient">
                            <img src="${destinations[place].image}" alt="${destinations[place.name]}">
                        </figure>   
                    </section>`
                    } else {
                    text = `<section class="place-container opacity" id="${i}">
                        <div class="right">
                            <h2 class="place-name">${destinations[place].name}</h2>
                            <p class="place-description">${destinations[place].info}</p>
                            <ul class="place-facts">
                                <li>
                                    <p><strong>Fact 1</strong></p>
                                    <p>${destinations[place].fact1}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 2</strong></p>
                                    <p>${destinations[place].fact2}e</p>
                                </li>
                                <li>
                                    <p><strong>Fact 3</strong></p>
                                    <p>${destinations[place].fact3}</p>
                                </li>
                            </ul>
                        </div>  
                        <figure class="place-image right-gradient">
                            <img src="${destinations[place].image}" alt="${destinations[place.name]}">
                        </figure>   
                    </section>`
                }
        allPlaces.insertAdjacentHTML('afterbegin',text);
  }          
}                   


export { addUserData, addPlaces, addNavLinks, highLightFocus }