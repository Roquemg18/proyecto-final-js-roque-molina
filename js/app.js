//var

let listaDeProductos=[]

fetch('../json/data.json')
    .then((respuesta) => respuesta.json())
    .then((data)=>{
        listaDeProductos = data
    })



//selectores
const itemName = document.querySelector('#itemName');
const itemImg = document.querySelector('#itemImg');
const itemCantidad = document.querySelector('#itemCantidad');
const itemPrice = document.querySelector('#itemPrice');
const carrito1 = document.querySelector('#carrito1');
const itemConteinerid = document.querySelector('#itemConteinerid');
const contenedorTotal = document.querySelector('#precioTotal')


//funciones
//eliminar del producto del carrito


const removeCarritoItem = (e)=>{
    const idProductoAEliminar = e.target.closest('.carrito').getAttribute('data-id')
    carrito = carrito.filter((producto)=> producto.id != idProductoAEliminar)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    refrescarPagina()
    renderizarProductoEnCarrito()
}


const actualizarTotalCarrito = () =>{
    const calcularTotal = carrito.reduce((acc,producto)=> acc + (producto.precio * producto.cantidad),0)
    precioTotal.innerText = `${calcularTotal}`
}


//crear los item en el carrito
const renderizarProductoEnCarrito = () =>{

carrito.forEach((item) =>{
    const nuevoItem = document.createElement('div');
    nuevoItem.className = 'carrito';
    nuevoItem.setAttribute('data-id', item.id)
    nuevoItem.innerHTML = `
    
    <div class="item-img"><img src="${item.logo}"></div>
    <div class="item-descrition">
        <h2 class="item-name">${item.nombre}</h2>
        <h3 class="item-cantidad">${item.cantidad}</h3>
    </div>
    <div class="conteiner-item-price">
        <h3 class="item-price">$ ${item.precio}</h3>
    </div>
    <button class="eliminar__Producto" type="button" id="eliminarProducto"><i class="fa-solid fa-trash-can"></i></button>
    `
    itemConteinerid.append(nuevoItem)


    
}) 

const eliminarCarrito = document.querySelectorAll('.carrito')
eliminarCarrito.forEach((button)=>{
    button.addEventListener('click',removeCarritoItem);
})

actualizarTotalCarrito()

}
renderizarProductoEnCarrito()


