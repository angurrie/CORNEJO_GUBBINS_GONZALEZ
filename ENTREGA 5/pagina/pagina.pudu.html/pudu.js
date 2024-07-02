function cambiarTitulo() {
    const nuevoTitulo = prompt("Introduce el nuevo título:");
    if (nuevoTitulo) {
        document.getElementById("titulo").textContent = nuevoTitulo;
    }
}
