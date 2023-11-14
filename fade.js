
$(document).ready(function() {
    const texto = "<Es un espacio para todos los amantes del Café y el código!>";
    const velocidad = 100;
    const div = $(".miDiv");
    let index = 0;
    let interval;

    function mostrarTextoLetraPorLetra() {
        if (index < texto.length) {
            div.append(texto[index]);
            index++;
        } else {
            clearInterval(interval); // Detener la ejecución continua
            setTimeout(function() {
                div.html(""); // Limpiar el contenido del div
                index = 0; // Reiniciar el índice
                interval = setInterval(mostrarTextoLetraPorLetra, velocidad);
            }, 5000); // Esperar 10 segundos antes de reiniciar
        }
    }

    // Iniciar el intervalo inicial
    interval = setInterval(mostrarTextoLetraPorLetra, velocidad);
});