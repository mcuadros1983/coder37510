//Clase de nuevo producto
class Producto{
	constructor (id, nombreProd, precio) {
		this.id = id;
        this.nombreProd = nombreProd.toUpperCase();
		this.precio = parseFloat(precio);
		this.vendido = false;
	}
}
 