const productos = [
    { id: '1', nombre: 'TUBOS PRO', precio: 4200 },
    { id: '2', nombre: 'BOTELLAS', precio: 7000 },
    { id: '3', nombre: 'PACKS', precio: 15500 }
];

document.addEventListener("DOMContentLoaded", async function() {
    try {
        await guardarProductosEnLocalStorage(productos);
        document.getElementById("boton-ingresar").addEventListener("click", ingresar);
        document.getElementById("mostrar-precios").addEventListener("change", mostrarPrecios);
        document.getElementById("boton-comprar").addEventListener("click", realizarCompra);
        document.getElementById("boton-terminar").addEventListener("click", terminar);
    } catch (error) {
        console.error("Error al inicializar la página:", error);
    }
});

async function guardarProductosEnLocalStorage(productos) {
    try {
        localStorage.setItem('productos', JSON.stringify(productos));
    } catch (error) {
        throw new Error("Error al guardar productos en el localStorage.");
    }
}

async function ingresar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    if (nombre && apellido) {
        try {
            await saludo(nombre, apellido);
            document.getElementById("formulario-nombre").style.display = "none";
            document.getElementById("opciones").style.display = "block";
        } catch (error) {
            console.error("Error en el proceso de saludo:", error);
        }
    } else {
        alert("Por favor, ingresa tu nombre y apellido.");
    }
}

async function saludo(nombre, apellido) {
    try {
        alert("Hola " + nombre + " " + apellido + ", has llegado al portal extraño.");
    } catch (error) {
        throw new Error("Error en la función de saludo.");
    }
}

async function mostrarPrecios() {
    const opcion = document.getElementById("mostrar-precios").value;

    try {
        const productosGuardados = await obtenerProductosDeLocalStorage();
        const producto = productosGuardados.find(p => p.id === opcion);

        if (producto) {
            document.getElementById("resultado-precio").textContent = `El precio de ${producto.nombre} es $${producto.precio}`;
        } else {
            document.getElementById("resultado-precio").textContent = "Opción no válida.";
        }
    } catch (error) {
        console.error("Error al mostrar precios:", error);
        document.getElementById("resultado-precio").textContent = "Hubo un error al obtener el precio.";
    }
}

async function obtenerProductosDeLocalStorage() {
    try {
        const productos = localStorage.getItem('productos');
        if (productos) {
            return JSON.parse(productos);
        } else {
            throw new Error("No se encontraron productos en el localStorage.");
        }
    } catch (error) {
        throw new Error("Error al obtener productos del localStorage.");
    }
}

async function realizarCompra() {
    try {
        document.getElementById("resultado-compra").textContent = "¡Felicitaciones! Tu compra en nuestra Tienda Extraña ha sido exitosa.";
    } catch (error) {
        console.error("Error al realizar la compra:", error);
    }
}

async function terminar() {
    try {
        document.getElementById("opciones").style.display = "none";
        document.getElementById("resultado-compra").textContent = "Gracias por visitar nuestra tienda. ¡Hasta luego!";
    } catch (error) {
        console.error("Error al terminar el proceso:", error);
    }
}

