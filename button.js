

// boton para desplazarse
$(document).ready(function() {
    $("#desplazarse-hacia-arriba").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 300 );
    });
  });