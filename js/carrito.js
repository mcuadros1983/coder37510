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
    // let colmontototal = document.getElementById("colmontototal");
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
    
    // console.log(nuevoPedido[i].nombreItemProd)
	


    // for (let i = 0; i < pedidolocal.length; i++){
    //     monto = pedidolocal.reduce( (acc, el) => acc + el.total, total )
    // }
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
            //   nuevoPedido.splice(buscado,buscado);
            //   console.log(nuevoPedido);
            //   buscado.splice();
            //   console.log(nuevoPedido);
            //   buscado.remove;
            //   location.reload();
              
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



//BUSCAR POR ID
// let buscado = nuevoPedido.find( item => item.id === ideliminar);
// console.log("El id encontrado es " +buscado);

//BUSCAR Y ELIMINAR
//Aplicacion2
// const nombres3 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
// //recibo el elemento a borrar por parametro
// const eliminar = (nombre) =>{
// 	//busco su indice en el array
// 	let index = nombres3.indexOf(nombre);
// 	//si existe, o sea es distinto a -1, lo borro con splice
// 	if (index != -1) {
// 		nombres3.splice(index,1);
// 	} else {
// 		console.log(nombre + " no existe");
// 	}
// }
// console.log(nombres3);
// eliminar("Miguel");
// console.log(nombres3);


// Se puede solucionar de una forma sencilla, usando los eventos, vas a tener que colocar una misma clase a todos los <div>, pues así nos evitamos añadir un eventListener por cada uno

// document.querySelectorAll(".click").forEach(el => {
//   el.addEventListener("click", e => {
//     const id = e.target.getAttribute("id");
//     console.log("Se ha clickeado el id "+id);
//   });
// });
// <div id="l73" class="click">Textos </div>
// <div id="l74" class="click">Textos </div>
// <div id="l75" class="click">Textos </div>
// <div id="l76" class="click">Textos </div>
// Usamos .target para saber a cual elemento se ha clickeado

// Teniendo ya el elemento, solo usamos getAttribute para poder obtener el id

// Entonces, solo que da ponerle un ID al <embed>

// Usamos querySelectorAll para obtener todos los elementos del DOM con un selector de CSS Específico, los cuales podremos recorrer con forEach

// document.querySelectorAll(".click").forEach(el => {
//   el.addEventListener("click", e => {
//     const id = e.target.getAttribute("id");
//     const process = "./files/"+id+"/"+id+"_instruccion.pdf";
//     emb.setAttribute("src", process);
//     console.log("ID Procesado: "+emb.getAttribute("src"));
//   });
// });
// <div id="l73" class="click">Textos </div>
// <div id="l74" class="click">Textos </div>
// <div id="l75" class="click">Textos </div>
// <div id="l76" class="click">Textos </div>
// <embed id="emb"></embed>


