function saludo(nombre, apellido) {
    alert("Hola " + nombre + " " + apellido + ", has llegado al portal extraño.");
}

function mostrarPrecios(opcion) {
    switch(opcion) {
        case '1':
            alert("El precio de TUBOS PRO es $4200");
            break;
        case '2':
            alert("El precio de BOTELLAS es $7000");
            break;
        case '3':
            alert("El precio de PACKS es $15500");
            break;
    }
}

function realizarCompra() {
    alert("¡Felicitaciones! Tu compra en nuestra Tienda Extraña ha sido exitosa.");
}

function elegirAccion(opcion) {
    let accion = prompt("Elige una acción: 1. Mostrar Precios, 2. Comprar, 3. Terminar");

    switch(accion) {
        case '1':
            mostrarPrecios(opcion);
            break;
        case '2':
            realizarCompra();
            break;
        case '3':
            alert("Gracias por visitar nuestra tienda. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida.");
    }
}

function elegirOpcion() {
    let opcion = prompt("Elige una opción: 1. TUBOS PRO, 2. BOTELLAS, 3. PACKS");
    
    if(opcion === '1' || opcion === '2' || opcion === '3') {
        elegirAccion(opcion);
    } else {
        alert("Opción no válida.");
    }
}


while(true) {
    let nombre = prompt("Ingresa tu nombre:");
    let apellido = prompt("Ingresa tu apellido:");

    if(nombre && apellido) {
        saludo(nombre, apellido);
        elegirOpcion();
        break;  
    } else {
        alert("Por favor, ingresa tu nombre y apellido.");
    }
}
