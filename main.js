//var
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

//selectores
const precioTotal = document.querySelector('#precioTotal');
const buttonCompra = document.querySelectorAll('.buttonCompra')
const buttonClear = document.querySelector("#buttonClear")
const buttonFinalizarCompra = document.querySelector('#buttonFinalizarCompra');

//funciones


//SweetAlert2
const notificacionDeCompra = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })
}

const alertaDeFinalizarCompra = () => {
    let timerInterval
    Swal.fire({
        title: 'Comprobando el pago',
        html: '',
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

const notificacionDeCompraRealizada = () => {

    setTimeout(() => {
        Swal.fire({
            position: 'mid-mid',
            icon: 'success',
            title: 'Se realiazo la compra correctamente',
            showConfirmButton: false,
            timer: 4000
        })
    }
        , 1500)


}

//agregar productos
const agregarProductoAlCarrito = (e) => {
    const idProductoElegido = e.target.getAttribute('data-id')
    const productoElegido = listaDeProductos.find((producto) => producto.id == idProductoElegido);

    if (carrito.some(producto => producto.id == idProductoElegido)) {
        const index = carrito.findIndex(producto => producto.id == idProductoElegido);
        carrito[index].cantidad++;
    } else {
        carrito.cantidad = 1;
        carrito.push(productoElegido);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
}



buttonCompra.forEach((button) => {
    button.addEventListener('click', agregarProductoAlCarrito)
    button.addEventListener('click', notificacionDeCompra);
})


// vaciar el carrito
const vaciarCarrito = () => {
    carrito.length = 0;
    localStorage.clear(carrito)
}
//refrescar pagina
const refrescarPagina = () => {
    location.reload();
}


buttonClear.addEventListener('click', () => {
    vaciarCarrito()
    refrescarPagina()
})



// finalizar compra

const finalizarCompra = () => {

    alertaDeFinalizarCompra()

    vaciarCarrito()
    setTimeout(() => {
        refrescarPagina()
    }, 3000);


}


buttonFinalizarCompra.addEventListener('click', finalizarCompra)
buttonFinalizarCompra.addEventListener('click', notificacionDeCompraRealizada)

