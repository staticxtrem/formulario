function obtenerFechaHoraActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    const fechaActual = `${dia}/${mes}/${anio}`;
    const horaActual = `${hora}:${minutos}:${segundos}`;

    return { fecha: fechaActual, hora: horaActual };
}

function actualizarFechaHora() {
    const fechaHoraActual = obtenerFechaHoraActual();

    document.getElementById('fecha').value = fechaHoraActual.fecha;
    document.getElementById('hora').value = fechaHoraActual.hora;
}

function copiar() {
    const fechaHoraActual = obtenerFechaHoraActual();
    const texto = `Fecha: ${fechaHoraActual.fecha}\nHora: ${fechaHoraActual.hora}`;
    navigator.clipboard.writeText(texto);

}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);

function copiar() {
    var nombre = document.getElementById("nombre");
    var campana = document.getElementById( "campana");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var fecha = document.getElementById('fecha');
    var hora = document.getElementById('hora');
    var texto = "Asesor: " + nombre.value + "\n" +
        + "Campana DID: " + campana.value + "\n" +
        "Email: " + email.value + "\n" +
        "Teléfono: " + telefono.value + "\n" +
        "Fecha: " + fecha.value + "\n" +
        "Hora: " + hora.value;

    navigator.clipboard.writeText(texto);
    alert('La información se ha copiado');
}

