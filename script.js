document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botón y el contenido extra
    const toggleButton = document.getElementById("toggleExample");
    const extraContent = document.getElementById("extraExample");

    // Evento para mostrar/ocultar el contenido extra
    toggleButton.addEventListener("click", function () {
        if (extraContent.classList.contains("hidden")) {
            extraContent.classList.remove("hidden");
            extraContent.classList.add("visible");
            toggleButton.textContent = "Ocultar detalles";
        } else {
            extraContent.classList.remove("visible");
            extraContent.classList.add("hidden");
            toggleButton.textContent = "Mostrar más detalles";
        }
    });
});