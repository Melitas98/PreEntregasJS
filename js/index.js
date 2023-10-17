console.log("El usuario ingreso a la página de pedidos del e-commerce y decide registrar un pedido personalizado");

const nombreUsuario = prompt("Ingresé su nombre completo");
alert(nombreUsuario + " bienvenido/a a Punto Enano, comencémos con tu pedido. Te vamos a pedir algunos datos para registrar tu compra");
const apellido = prompt("Ingrese su Apellido");
const email = prompt("Ingrese su Correo Electronico");
let telefono = prompt("Ingrese su numero de contacto");
let caracteristicas = prompt("Ingrese una breve descripción de su pedido");

console.log  (nombrePelicula);
console.log  (tamanio);

function obtenerInformacion() {
    let personaje = prompt("Si tu pedido tiene como protagonista a un personaje de una película o juego ingresa: 1 . Sino ingresa: 0");
    if (personaje == "1") {
        nombrePelicula = prompt("Ingresa el nombre del personaje y de la película/juego donde aparece");
    } else if (personaje == "0") {
        tamanio = prompt("Ingresa el tamaño aproximado de tu pedido");
    } else {
        alert("Opción incorrecta, ingrese: 1 o 0");
        obtenerInformacion();
    }
}

obtenerInformacion();

alert("Gracias por tu pedido, en breve nos pondremos en contacto con más novedades");
alert("Cualquier duda o consulta, no dudes en contactarnos por cualquiera de nuestros medios habilitados");
