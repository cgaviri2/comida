let carrito = [];
let total = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function agregarAlCarrito(nombre, precio, cantidad) {
    cantidad = parseInt(cantidad);
    if (cantidad > 0) {
        const item = { nombre, precio, cantidad };
        carrito.push(item);
        actualizarTotal();
        alert(`${cantidad} ${nombre}(s) agregados al carrito.`);
    } else {
        alert("Por favor, seleccione una cantidad válida.");
    }
}

function actualizarTotal() {
    total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    document.getElementById('total').innerText = total;
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        listaCarrito.innerHTML += `<p>${item.cantidad} x ${item.nombre} - ${item.precio * item.cantidad} COP</p>`;
    });
}

function abrirDialogoPago() {
    document.getElementById('dialogo-pago').style.display = 'flex';
}

function cerrarDialogoPago() {
    document.getElementById('dialogo-pago').style.display = 'none';
}

function realizarPago() {
    const nombre = document.getElementById('nombre').value;
    const numeroTarjeta = document.getElementById('numero-tarjeta').value;
    const fechaExpiracion = document.getElementById('fecha-expiracion').value;
    const codigoSeguridad = document.getElementById('codigo-seguridad').value;

    if (nombre && numeroTarjeta && fechaExpiracion && codigoSeguridad) {
        alert("Pago realizado exitosamente.");
        cerrarDialogoPago();
        carrito = [];
        actualizarTotal();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
