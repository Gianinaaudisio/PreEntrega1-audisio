
const productos = [
    { id: '1', nombre: 'TUBOS PRO', precio: 4200 },
    { id: '2', nombre: 'BOTELLAS', precio: 7000 },
    { id: '3', nombre: 'PACKS', precio: 15500 }
];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton-ingresar").addEventListener("click", ingresar);
});

function ingresar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    if (nombre && apellido) {
        saludo(nombre, apellido);
        document.getElementById("formulario-nombre").style.display = "none";
        document.getElementById("opciones").style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre y apellido.");
    }
}

function saludo(nombre, apellido) {
    alert("Hola " + nombre + " " + apellido + ", has llegado al portal extraño.");
}

function mostrarPrecios(opcion) {
    const producto = productos.find(p => p.id === opcion);

    if (producto) {
        alert(`El precio de ${producto.nombre} es $${producto.precio}`);
    } else {
        alert("Opción no válida.");
    }
}

function realizarCompra() {
    alert("¡Felicitaciones! Tu compra en nuestra Tienda Extraña ha sido exitosa.");
}

function terminar() {
    alert("Gracias por visitar nuestra tienda. ¡Hasta luego!");
    document.getElementById("opciones").style.display = "none";
}
