

// navegacion 
$(document).ready(function() {
   


    $("#contacto").click(function(e) {

      e.preventDefault();
    
       let destino = $(".formulario");
       let destinoPosicion = destino.offset().top;
    
    
          $("html, body").animate({
            scrollTop: destinoPosicion
          }, 300 );
        });

    
 


  $("#productos").click(function(e) {

  e.preventDefault();

     let destino = $("#galeria");
     let destinoPosicion = destino.offset().top;
 

      $("html , body").animate( { 

      scrollTop: destinoPosicion

      }, 300   );





  });

  $("#acerca").click(function(e) {

    e.preventDefault();
  
       let destino = $(".container");
       let destinoPosicion = destino.offset().top;
   
  
        $("html , body").animate( { 
  
        scrollTop: destinoPosicion
  
        }, 300   );


  
       
  
  
    });


    $("#servicios").click(function(e) {

      e.preventDefault();
    
       let destino = $("#centrado-servicios");
       let destinoPosicion = destino.offset().top;
    
    
          $("html, body").animate({
            scrollTop: destinoPosicion
          }, 300 );
        });




        // botones de menu desplegable para moviles 

        $("#about").click(function(e) {

          e.preventDefault();
        
           let destino = $(".container");
           let destinoPosicion = destino.offset().top;
        
        
              $("html, body").animate({
                scrollTop: destinoPosicion
              }, 300 );
            });
    
    

            $("#products").click(function(e) {

              e.preventDefault();
            
               let destino = $("#galeria");
               let destinoPosicion = destino.offset().top;
            
            
                  $("html, body").animate({
                    scrollTop: destinoPosicion
                  }, 300 );
                });
        
        
                $("#services").click(function(e) {

                  e.preventDefault();
                
                   let destino = $("#centrado-servicios");
                   let destinoPosicion = destino.offset().top;
                
                
                      $("html, body").animate({
                        scrollTop: destinoPosicion
                      }, 300 );
                    });
            
            
                    $("#contact").click(function(e) {

                      e.preventDefault();
                    
                       let destino = $(".formulario");
                       let destinoPosicion = destino.offset().top;
                    
                    
                          $("html, body").animate({
                            scrollTop: destinoPosicion
                          }, 300 );
                        });
                
                
                                    












});