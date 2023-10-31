// header menu btn
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-solid");
  navbar.classList.toggle("open");

}


//explore dropdown
const divContainer = document.querySelector('#elementToWorkOn');
let isClicked = true;

let showOrHide = function(){
  if (isClicked){
    divContainer.style.display = "block";
    isClicked = false;
}else{
  divContainer.style.display = "none";
  isClicked = true;
}
}


//category slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0:{
       slidesPerView:1,
      },
      767:{
        slidesPerView:2,
      },
    }
  });


  //faq section
  var acc= document.getElementsByClassName("accordion");
  var i;
  for (i = 0;i < acc.length; i++){
    acc[i].addEventListener('click', function(){
     this.classList.toggle("active");
     this.parentElement.classList.toggle("active");

     var panel = this.nextElementSibling;

     if (panel.style.display === "block"){
      panel.style.display = "none";
     }else{
      panel.style.display = "block";
     }
    });

  }

  //testimonials
  var swiper = new Swiper('.js-testimonials-slider', {
       grabCursor:true,
       spaceBetween:30,
       pagination: {
        el: '.js-testimonials-pagination',
        clickable:true,
      },
      breakpoints:{
        767:{
          slidesPerView:2,
        }
      }
  });
