//Clase de nuevo de item de pedido
class itemPedido{
	constructor (codigoProd, nombreItemProd, precio, total, idItemPedido, cantidadValor) {
		this.codigoProd = codigoProd;
     	this.nombreItemProd = nombreItemProd;
		this.precio = parseFloat(precio);
		this.total = total;
		this.idItemPedido = parseInt(idItemPedido);
		this.cantidadValor = cantidadValor;
		this.vendido = false;
	}
}