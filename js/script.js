// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ensure class toggles between `bx` and `bx-x`
    navbar.classList.toggle('active');
};

// Scroll Section Active Links
let sections = document.querySelectorAll('section'); // Use querySelectorAll for multiple sections
let navLinks = document.querySelectorAll('header nav a'); // Use querySelectorAll for links

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Add sticky class

    sections.forEach((sec) => {
        let top = window.scrollY; // Correct scroll position
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

// ********************************toggle bar remove*********************************************************


menuIcon.classList.remove('bx-x'); // Ensure class toggles between `bx` and `bx-x`
navbar.classList.remove('active');



// // ********************************scroll reveal *******************************************
ScrollReveal({
    //  reset: true ,
     distance:'80px',
     duration:1000,
     delay:100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'left' });









// // ********************************navbar *******************************************
// let menuIcon =document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx bx-x');
//     navbar.classList.toggle('active');
// };

// // ********************************scroll section active links*******************************************

// let sections = document.querySelector('section');
// let navLinks= document.querySelector('header nav a');

// window.onscroll=()=>{
//     sections.forEach(sec=>{
//         let top = window.screenY;
//         let offset= sec.offsetTop -150
//         let height= sec.offsetHeight;
//         let id=sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//             });
//         };

//     });
//     // ********************************sticky navbar *******************************************
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

// };
    