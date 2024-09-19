
const productos = [
    { id: '1', nombre: 'TUBOS PRO', precio: 4200 },
    { id: '2', nombre: 'BOTELLAS', precio: 7000 },
    { id: '3', nombre: 'PACKS', precio: 15500 }
];


document.addEventListener("DOMContentLoaded", function() {
    localStorage.setItem('productos', JSON.stringify(productos)); 
    document.getElementById("boton-ingresar").addEventListener("click", ingresar);
    
    document.getElementById("mostrar-precios").addEventListener("change", mostrarPrecios);
    document.getElementById("boton-comprar").addEventListener("click", realizarCompra);
    document.getElementById("boton-terminar").addEventListener("click", terminar);
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

function mostrarPrecios() {
    
    const opcion = document.getElementById("mostrar-precios").value;
    
    
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productosGuardados.find(p => p.id === opcion);

    if (producto) {
        
        document.getElementById("resultado-precio").textContent = `El precio de ${producto.nombre} es $${producto.precio}`;
    } else {
        document.getElementById("resultado-precio").textContent = "Opción no válida.";
    }
}

function realizarCompra() {
    
    document.getElementById("resultado-compra").textContent = "¡Felicitaciones! Tu compra en nuestra Tienda Extraña ha sido exitosa.";
}

function terminar() {
    
    document.getElementById("opciones").style.display = "none";
    
    document.getElementById("resultado-compra").textContent = "Gracias por visitar nuestra tienda. ¡Hasta luego!";
}
