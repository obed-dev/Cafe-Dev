$(document).ready(function ()  { 


   let currentIndex = 0;
   let slides = $(".slide");
   let totalSlides = slides.length;


 function showSlide (index) {
    slides.hide();
    slides.eq(index).fadeIn();


 }
//  <!-- Antigua funcionalidad con botones -->
//  $('#nextBtn').click(function() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     showSlide(currentIndex);
// });

// $('#prevBtn').click(function() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     showSlide(currentIndex);
// });

let interval = setInterval( nextSlide , 3000   );


function nextSlide() {
   currentIndex = (currentIndex + 1) % totalSlides;
   showSlide(currentIndex);
}




$('.imagenes').hover(function() {
   clearInterval(interval);
}, function() {
   interval = setInterval(nextSlide, 3000);
});
 











// Mostrar el primer slide al cargar la página
showSlide(currentIndex);
});