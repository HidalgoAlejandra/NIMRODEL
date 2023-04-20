function mostrarComuniquemonos() { document.getElementById("comuniquemonos").className = "row bg-dark text-white d-block d-md-block"; }

function mostrarReserva() { document.getElementById("reserva").className = "row bg-dark text-white d-block d-md-block"; }

$(function() {

    $("form[name='comuniquemonos']").validate({
        rules: {
            nombre: "required",
            email: {
                required: true,
                email: true
            },
            telefono: "required",
            motivo: "required",
            comentario: "required"
        },

        messages: {
            nombre: "Por favor, introduzca su nombre",
            email: "Por favor, introduzca su email",
            telefono: "Por favor, introduzca su telefono",
            motivo: "Por favor, introduzca su motivo",
            comentario: "Por favor, introduzca su comentario"
        },

        submitHandler: function(form) {

            form.submit();

        }

    });

});


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}



function Ventana(num) {
    let valor_src = $(".card-img-top[data-id=" + num + "]").attr('src');
    let valor_titulo = $(".card-title[data-id=" + num + "]").text();
    let valor_texto = $(".card-text[data-id=" + num + "]").text();
    //alert(valor_src);
    $("#mi_imagen").attr("src", valor_src);
    $("#mi_titulo").text(valor_titulo);
    $("#mi_texto").text(valor_texto);
    modal.style.display = "block";
}

var modalCarrusel = document.getElementById("myModalCarrusel");
var spanCarrusel = document.getElementsByClassName("closeCarrusel")[0];

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalCarrusel) {
        modalCarrusel.style.display = "none";
    }

}

function VentanaCarrusel() {
    modalCarrusel.style.display = "block";
}
spanCarrusel.onclick = function() {
    modalCarrusel.style.display = "none";
}









/* function validacion() {

    if (nombre.value === "") {
        alert("Por favor, escribe tu nombre.");
        nombre.focus();
        return false;
    }
    if (email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
    }
    if (telefono.value === "") {
        alert("Por favor, escribe tu telefono.");
        telefono.focus();
        return false;
    } 
    if (motivo.value === "") {
        alert("Por favor, escribe tu motivo.");
        motivo.focus();
        return false;
    } 
    if (comentario.value === "") {
        alert("Por favor, escribe tu comentario.");
        comentario.focus();
        return false;
    }

    alert("Muchas gracias "+ nombre.value+" hemos recibido su sugerencia y enviaremos una pronta respuesta al correo "+ email.value);
    return true;

} */
/* function validacionReserva() {

    if (nombrereserva.value === "") {
        alert("Por favor, escribe tu nombre para la reserva.");
        nombrereserva.focus();
        return false;
    }
    if (emailreserva.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        emailreserva.focus();
        return false;
    }
    if (telefonoreserva.value === "") {
        alert("Por favor, escribe tu telefono.");
        telefonoreserva.focus();
        return false;
    } 
    if (fechareserva.value === "") {
        alert("Por favor, escribe la fecha.");
        fechareserva.focus();
        return false;
    } 
    if (horareserva.value === "") {
        alert("Por favor, escribe la hora.");
        horareserva.focus();
        return false;
    }
    if (asistentes.value === "") {
        alert("Por favor, escribe cantidad asistentes.");
        asistentes.focus();
        return false;
    }
    alert("Muchas gracias "+ nombrereserva.value+" hemos recibido tu reserva y enviaremos una confirmacion al correo "+ emailreserva.value);
    return true;

} */