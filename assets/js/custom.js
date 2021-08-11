// =========================== SCRIPT FOR STICKY NAVIGATION 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// ============================= SCRIPT FOR FILTER MENU 
const btns = document.querySelectorAll('.filter-btn');
const filterImage = document.querySelectorAll('.filter-image');
for(i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);

        filterImage.forEach((product)=> {
            if(filter === "show all"){
                product.style.display = 'block'
            }else {
                if(product.classList.contains(filter)) {
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// =========================== SCRIPT FOR ACCORDION
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
// =============================== OWL CAROUSEL SLIDER JQUERY CODE
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                800:{
                    items:2,
                    nav :true
                },
                992:{
                    items:3,
                    nav :true
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
            }

    });
})