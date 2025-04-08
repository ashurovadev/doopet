// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        if (dropbtn) {
            dropbtn.addEventListener('click', function(e) {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('#mobile-menu') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('current');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('current');
        }, 5000);
    }
});


const allProducts = document.querySelectorAll(".egg");

allProducts.forEach(element => {
    element.onclick = () => {
        window.location.href = "/product/";
    }
})