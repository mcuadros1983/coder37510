//Array vacio para Productos y Precios
let productos = [];

// let productos = fetch('data/productos.json').then(res => res.json())
// productos.then(products => console.log(products))
// console.log(productos)
// let arrayDatos = []
// const obtenerDatos = async () => {
// 	arrayDatos = await fetch('data/productos.json').then(res => res.json())
// 	console.log(arrayDatos) // un valor
// 	// resto de código
//   }

// obtenerDatos();
// console.log(arrayDatos);

productos.push(new Producto("1","aguja","850"));
productos.push(new Producto("2","bocado","850"));
productos.push(new Producto("3","colita de cuadril","980"));
productos.push(new Producto("4","bola de lomo","950"));
productos.push(new Producto("5","costeleta","830"));
productos.push(new Producto("6","cuadrada","990"));
productos.push(new Producto("7","paleta","800"));
productos.push(new Producto("8","costilla","990"));
productos.push(new Producto("9","bocado de cerdo","730"));
productos.push(new Producto("10","carre","700"));
productos.push(new Producto("11","costilla de cerdo","810"));
productos.push(new Producto("12","matambre de cerdo","930"));
productos.push(new Producto("13","chorizo criollo","570"));
productos.push(new Producto("14","chorizo parrillero","670"));
productos.push(new Producto("15","hamburguesas","500"));
productos.push(new Producto("16","milanesas","600"));
productos.push(new Producto("17","vacio","1100"));
productos.push(new Producto("18","matambre de novillo ","1200"));
productos.push(new Producto("19","entraña","1300"));
productos.push(new Producto("20","cuadril","1500"));

//-------------

//Declaraciones de variables que se utiliarán
let monto = 0;
let boton = document.getElementById("btnPrincipal");
let selectpedido = document.getElementById("pedido")
let listado = ""
let enJSON = ""
let pedidolocal = JSON.parse(localStorage.getItem("pedidonuevo"));
let nuevoPedido = [];
let obj = 0;
let total = 0;

//En caso de existir productos en el carrito, se muestra el monto total en el icono del carrito apenas se cargue la pagina
if (pedidolocal != null){
document.addEventListener("DOMContentLoaded", ready);
	function ready() {
		for (let i = 0; i < pedidolocal.length; i++){
			monto = pedidolocal.reduce( (acc, el) => acc + el.total, total )
			console.log(monto);
		}
	let carrito = document.getElementById("shopCart");
	carrito.innerText = "$ " + (monto);	
	}
}

//Evento y funcion del boton para cargar los productos al carrito

// boton.addEventListener("click", respuestaClick)
(document.getElementsByClassName('agregar').length) ? boton.addEventListener("click", respuestaClick) : "" ;

function respuestaClick(){
	let idItemArr = 0;

	//En caso de que exista prouctos en el carrito estos se iguala array que utilizaremos 
	(pedidolocal) ? nuevoPedido = pedidolocal : nuevoPedido = []

	
	//Recorremos el array para ver que cantidad de elmentos hay y a su vez determinar en que numero de id vamos para poder asignar el proximo id al siguiente item
	if (nuevoPedido.length != 0){
		let lastItem = 0;
		let getLastArrItem = (arr) => { 
			lastItem = arr[arr.length-1];  
		}  
		getLastArrItem(nuevoPedido);
		idItemArr = lastItem.idItemPedido;
		console.log(idItemArr);
		}
			

	// }

	//Se analiza si es que se ingreso o no una cantidad valida superior a 0 y posteriormente se procede a hacer la busqueda del producto en el array que los contiene para determinar nombre, precio y se calcula el totald el item
	let cantidadValor = document.getElementById("cantidad").value;
	if (cantidadValor != 0) {
	let codProd = document.getElementsByClassName("corte")[0].id;
	let prodSeleccionado = productos.find( producto => producto.id === codProd );
	total = prodSeleccionado.precio * cantidadValor;
	

	//Encontrado el producto se hace un push de la clase itemPedido al array nuevoPedido
	nuevoPedido.push(new itemPedido(prodSeleccionado.id,prodSeleccionado.nombreProd,prodSeleccionado.precio,total,++idItemArr,cantidadValor));

	//Se limpia el localStorage para evitar incongruencias en la informacion
	localStorage.clear();

	//Se envia el array al localStorage a traves de un JSON
	enJSON = JSON.stringify(nuevoPedido);
	localStorage.setItem("pedidonuevo",enJSON);
	console.log(nuevoPedido);

	location.reload();

	let alertMsg = document.getElementById("aviso");
	//cambio el código HTML interno"
	alertMsg.innerHTML = `<div class="alert alert-dark alert-dismissible divRespuesta fade show position-fixed" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button><i class="fa-solid fa-circle-check"></i><span> ${prodSeleccionado.nombreProd} se ha añadido a tu carrito</span></div>`
	
	

	} else {
		alert("Debe ingresar un valor superior a 0");
	}

} 

	let cartDetalle = document.getElementById("shopCart");
	cartDetalle.addEventListener("click", mostrarDetalle);
	function mostrarDetalle(){
		
		if (monto !=0) {
		pedidolocal = JSON.parse(localStorage.getItem("pedidonuevo"));
		(pedidolocal) ? nuevoPedido = pedidolocal : nuevoPedido = []
		
		Swal.fire({
			title: "TU PEDIDO",
			html: (`${ listado + nuevoPedido.map(n => `${n.cantidadValor}kg. de ${n.nombreItemProd} Precio $${n.precio}<br>`).join("")} \n <br> ${"TOTAL $" + monto}`),
			showCancelButton: true,
			confirmButtonText: "Comprar",
			cancelButtonText: "Ver Carrito",
		}).then(resultado => {
			if (resultado.value) {
				// Redireccionar a la pagina de pago
				window.location.href = "pagina-pago.html"
			} else {
				// Redireccionar al carrito
				window.location.href = "carrito.html"
			}
		});

	}
}
