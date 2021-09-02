// Back to top button function 
const toTopBtn = document.querySelector('#back-to-top');
      
// Scrolls back to the top of the page
let scrollToTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
};

 // Shows or hides the button depending on the height of the page       
let checkHeight = () => {
    const heroSection =  document.querySelector('#hero-section'),
          topHeight = heroSection.clientHeight / 2;
    if (window.scrollY >= topHeight) {
        toTopBtn.classList.remove('d-none')
    } else {
        toTopBtn.classList.add('d-none')
    }
}

// Invokes the back to top
let backToTop = () => { 
    window.addEventListener('scroll', checkHeight);
    toTopBtn.addEventListener('click', scrollToTop);
}
    
export { backToTop }
