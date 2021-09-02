const mobileMenuBtn = document.querySelector('#mobile-menu'),
      navItems = document.querySelector('#nav-items'),
      navLinks = navItems.children;


const toggleMenu = () => {
    navItems.classList.toggle('d-none');
};

      
const menuClickEvent = () => {
        mobileMenuBtn.addEventListener('click', toggleMenu);
};

window.addEventListener('resize', function() {
    if (window.innerWidth >= 800) {
        navItems.classList.remove('d-none');
    } else {        
        navItems.classList.add('d-none');
    }
})
    

for (const i of navLinks) {
    i.addEventListener('click', function() {
        if (window.innerWidth < 800) {
            navItems.classList.add('d-none');
        }
    })
}


export { menuClickEvent }