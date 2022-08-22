//En caso de existir productos en el carrito, se va a cargar el pedido directamente en la pagina carrito
if (pedidolocal){
	nuevoPedido = pedidolocal;
    document.addEventListener("DOMContentLoaded", mostrarcarrito);
	function mostrarcarrito(){
	let colproductos = document.getElementById("colproductos");
    let colprecios = document.getElementById("colprecios");
    let colcantidad = document.getElementById("colcantidad");
    let colsubtotal = document.getElementById("colsubtotal");
    let colbtneliminar = document.getElementById("colbtneliminar");

    let ideliminar = "";
    let btneliminar = ""

	for (let i = 0; i<nuevoPedido.length; i++){
	(colproductos) ? colproductos.innerHTML += (nuevoPedido[i].nombreItemProd + '<br><br>') : "";
    (colprecios) ? colprecios.innerHTML += '$' + (nuevoPedido[i].precio + '<br><br>') : "";
    (colcantidad) ? colcantidad.innerHTML += (nuevoPedido[i].cantidadValor + '<br><br>') : "";
    (colsubtotal) ? colsubtotal.innerHTML += '$' + (nuevoPedido[i].total + '<br><br>') : "";
    (colbtneliminar) ? colbtneliminar.innerHTML += (`<button type="button" class="close border-0 eliminaritem" id="${nuevoPedido[i].idItemPedido}">x</button><br><br>`):"";
    btneliminar = (`<button type="button" class="close border-0 eliminaritem" id="${nuevoPedido[i].idItemPedido}">x</button><br><br>`)

    let cargadetalle = document.getElementById("detallepago");
    (cargadetalle) ? cargadetalle.innerHTML += (nuevoPedido[i].nombreItemProd + " x " + nuevoPedido[i].cantidadValor + "kg a $" + nuevoPedido[i].precio) + '<br><br>' : "";
    
    let cargavaloritem = document.getElementById("valoritem");
    (cargavaloritem) ? cargavaloritem.innerHTML += ("$" + nuevoPedido[i].total + btneliminar) : "";
    }

    let monto$ = document.getElementById("monto$");
    (monto$) ? monto$.innerHTML += (monto) : "";

    (colsubtotal) ? colsubtotal.innerHTML += 'TOTAL $ ' + (monto + '<br><br>') : "";

        document.querySelectorAll(".eliminaritem").forEach(el => {
            el.addEventListener("click", e => {
              let id = e.target.getAttribute("id");
              ideliminar = id;
              console.log("Se ha clickeado el id "+id);
              let buscado = nuevoPedido.find( item => item.idItemPedido == ideliminar);
              let indexeliminar = (nuevoPedido.indexOf(buscado));
              nuevoPedido.splice(indexeliminar,1);
              console.log(nuevoPedido)
              enJSON = JSON.stringify(nuevoPedido);
              localStorage.setItem("pedidonuevo",enJSON);
              location.reload();
            });
          });
        (document.getElementById("btn-pagar")) ? document.getElementById("btn-pagar").onclick = function () {
        location.href = "/pagina-pago.html";
        } : "";

        (document.getElementById("btncomprarpedido")) ? document.getElementById("btncomprarpedido").onclick = function () {
            location.href = "/pagina-pago.html";
            } : "";
	}
} 
console.log(nuevoPedido);