

//  formulario
$(document).ready(function() {
    // Función para verificar si un campo está vacío
    function validarCampoVacio(campo) {
        return campo.val().trim() === "";
    }

    // Función para aplicar estilos según las condiciones
    function aplicarEstilos() {
        $("input").removeClass("is-valid is-invalid");
        

        $("input").each(function() {
            if (validarCampoVacio($(this))) {
                $(this).addClass("is-invalid");
            } else {
                $(this).addClass("is-valid");
            }
        });

        
    }

    // Evento para cambiar los estilos en tiempo real
    $("input").on("input", function() {
        aplicarEstilos();
    });

    // Evento para mostrar el mensaje de SweetAlert al enviar
    $("#enviar").click(function() {
        aplicarEstilos(); // Aplicar estilos antes de enviar

        if ($(".is-invalid").length === 0) {
            Swal.fire("Todos los campos están llenos", "", "success");
        } else {
            var camposFaltantes = $(".is-invalid").map(function() {
                return $(this).attr("placeholder");
            }).get().join(", ");

            Swal.fire("Faltan campos por llenar", "Por favor, complete los campos: " + camposFaltantes, "error");
        }
    });
});

 