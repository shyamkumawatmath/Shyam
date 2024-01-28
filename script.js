document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
 
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 

 function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const educationEntries = document.querySelectorAll('.education-entry');

    educationEntries.forEach(entry => {
        entry.addEventListener('click', function() {
            // Toggle the 'active' class on click
            this.classList.toggle('active');
        });
    });
});




function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.className === "active") {
        navLinks.className = "";
    } else {
        navLinks.className = "active";
    }
}
