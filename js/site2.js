//Clase de nuevo producto
class Producto{
	constructor (codigoProd, nombreProd, precio) {
		this.codigoProd = parseFloat(codigoProd);
        this.nombreProd = nombreProd.toUpperCase();
		this.precio = parseFloat(precio);
		this.vendido = false;
	}
}
 
//Array vacio para Productos y Precios
const productos = [];
productos.push(new Producto("1","bocado","850"));
productos.push(new Producto("2","aguja","850"));
productos.push(new Producto("3","colita","980"));
productos.push(new Producto("4","bola","950"));
productos.push(new Producto("5","costeleta","830"));
productos.push(new Producto("6","cuadrada","990"));
productos.push(new Producto("7","paleta","800"));
productos.push(new Producto("8","costilla","990"));
productos.push(new Producto("9","bocadocerdo","730"));
productos.push(new Producto("10","carre","700"));
productos.push(new Producto("11","costillacerdo","810"));
productos.push(new Producto("12","matambrecerdo","930"));
productos.push(new Producto("13","criollo","570"));
productos.push(new Producto("14","parrillero","670"));
productos.push(new Producto("15","hamburguesas","500"));
productos.push(new Producto("16","milanesas","600"));
productos.push(new Producto("17","amadecasa","1100"));
productos.push(new Producto("18","asado","1200"));
productos.push(new Producto("19","cerdo","1300"));
productos.push(new Producto("20","premium","1500"));

// Declaracion de la informacion inicial para el pedido
let ingresarCodigo = prompt("Ingrese el codigo del producto");
let ingresarCantidad = prompt("Ingrese la cantidad requerida");
// let ingresarFormaPago = prompt("Ingrese la forma de pago (escriba la opcion efectivo o tarjeta)");
// let ingreseConfirmacion = prompt("¿Desea confirmar el pedido? (escriba SI para aceptar o NO para rechazar)");
// let nuevoItem = prompt("¿Desea ingresar un nuevo item? (escriba SI para confirmar)");

function buscarproducto(productos, ingresarCodigo) {
	var i = 0;
	// Mientras queden elementos por comprobar en el array y el nombre del elemento actual no sea el nombre que buscamos, pasamos al elemento siguiente
	while (i < productos.length && productos[i].codigoProd != ingresarCodigo) {
	i++;
	}
	
	// Verifica si la cantidad ha sido ingresada correctamente
	if (isNaN(ingresarCantidad)){
		alert("Debe ingresar un valor numerico en cantidad");
		return;
	};

	// Si el motivo por el que se ha salido del array es porque no quedan elementos por comprobar devolver null (no se ha encontrado). En caso contrario devolver el elemento en la posición i (posición en la que se ha encontrado ele lemento)
	if (i < productos.length) {
		let total = productos[i].precio * ingresarCantidad;
		alert("El monto total de su pedido es de $" + total);
	}
	else {
		alert("El código que ha ingresado es inválido");
	}
}
//Ejecucion de la funcion
buscarproducto(productos, ingresarCodigo); 