alert("Bienvenido a Punto Enano. Empecemos con tu compra!");

const productos = [
    { id: 1, nombre: "Grogu", precio: 4000},
    { id: 2, nombre: "Mochila en corchet", precio: 3800},
    { id: 3, nombre: "Cactus en Crochet", precio: 1600},
    { id: 4, nombre: "Elefante de la suerte", precio: 1800},
    { id: 5, nombre: "Gatitos en Crochet", precio: 3200}
];

function mostrarProductos() {
    alert("Tenemos los siguientes productos disponibles para tu comrpa:");
    productos.forEach((producto) => {
        alert(producto.id + ": " + producto.nombre + " - $" + producto.precio);
    });
}

mostrarProductos();

const carrito = [];

while (true) {
    const seleccion = prompt("Ingresa el numero del producto que queres agregar a tu carrito o 0 para finalizar la compra:");
    if (seleccion == "0") {
        break;
    }
    
    const productoSeleccionado = productos.find(producto => producto.id === parseInt(seleccion));
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        alert("Producto agregado al carrito: " + productoSeleccionado.nombre);
    } else {
        alert("Lo sentimos :( Este producto no existe. Intentalo otra vez.");
    }
}

let totalCompra = 0;

carrito.forEach((producto) => {
    totalCompra += producto.precio;
});

alert("En tu carrito tenes los siguientes productos:");
carrito.forEach((producto) => {
    alert(producto.nombre + ": $" + producto.precio);
});

alert("El total a abonar por tu compra es de: $" + totalCompra);
alert("¡Gracias por tu compra en Punto Enano, volve pronto! ;)");
