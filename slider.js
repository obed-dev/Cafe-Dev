

// hover de texto a las imagenes 
$(document).ready(function () {
    $(".desc" ).hide();

    $(".centrar" ).hover(function () {
        // Muestra solo el elemento "desc" dentro del mismo contenedor
        $(this).find(".desc").fadeIn(300);
    }, function () {
        // Oculta el elemento "desc" cuando se retira el ratón
        $(this).find(".desc").fadeOut(300);
    });
    
    $(".card-text" ).hide();

    $(".col-md-4" ).hover(function () {
        // Muestra solo el elemento "desc" dentro del mismo contenedor
        $(this).find(".card-text").fadeIn(300);
    }, function () {
        // Oculta el elemento "desc" cuando se retira el ratón
        $(this).find(".card-text").fadeOut(300);
    });


// boton de menu desplegable

$(".menu-desplegable").hide();  
 

$(".navbar-toggler").click(function () {
   
    $(".menu-desplegable").toggle();
 
 


})



    
});





 

    






