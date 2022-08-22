//Clase de datos de pago
class Nuevopago{
	constructor (nombreCliente, dniCliente, direccionCliente, telefonoCliente, emailCliente, ciudadCliente, provinciaCliente, numeroTarjeta, mesVenc, anoVenc, codigTarjeta, nombreTarjeta) {
		this.nombreCliente = nombreCliente.toUpperCase();
        this.dniCliente = dniCliente;
        this.direccionCliente = direccionCliente.toUpperCase();
		this.telefonoCliente = telefonoCliente;
		this.emailCliente = emailCliente;
		this.ciudadCliente = ciudadCliente.toUpperCase();
		this.provinciaCliente = provinciaCliente;
        this.numeroTarjeta = numeroTarjeta;
        this.mesVenc = mesVenc;
        this.anoVenc = anoVenc;
        this.codigTarjeta = codigTarjeta;
        this.nombreTarjeta = nombreTarjeta.toUpperCase();
	}
}



let compraConfirmada = document.getElementById("btn-confirm");
compraConfirmada.addEventListener("click", enviarCompra);

function enviarCompra(){

	if (nuevoPedido.length == 0) {
		Swal.fire({
			title: 'Error!',
			text: 'Su carrito esta vacío',
			icon: 'error',
			confirmButtonText: "Cerrar"
		})
	} else {

	let fullname = document.getElementById("full_name_id").value;
	let dni = document.getElementById("dni_id").value;
	let telefono = document.getElementById("phone_id").value;
	let email = document.getElementById("email_id").value;
	let street = document.getElementById("street1_id").value;
	let city = document.getElementById("city_id").value;
	let state = document.getElementById("state_id").value;
	let creditcardnumber = document.getElementById("creditcardnumber_id").value;
	let expmonth = document.getElementById("expmonth_id").value;
	let expyear = document.getElementById("expyear_id").value;
	let ccv = document.getElementById("ccv_id").value;
	let creditcardname = document.getElementById("creditcardname_id").value;
	


		if (fullname.length == 0 || dni.length == 0 || telefono.length == 0 || email.length == 0 || street.length == 0 || city.length == 0 || state.length == 0 || creditcardnumber.length == 0 || expmonth.length == 0 || expyear.length == 0 || ccv.length == 0 || creditcardname.length == 0) {
			Swal.fire({
				title: 'Error!',
				text: 'Verifique que todos los campos esten completos',
				icon: 'error',
				confirmButtonText: "Cerrar"
			})
		
		} else {
		Swal.fire({
			title: 'Está seguro de realizar la operación?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sí, seguro',
			cancelButtonText: 'No, no quiero'
		}).then((result) => {
	
			if (result.isConfirmed) {
				
			compraConfirmada.innerText = "Enviando";

			//Confirmada la operacion, se crea un array con los datos del cliente y la tarjeta


			let datosCompra = []
			datosCompra.push(new Nuevopago(fullname,dni,street, telefono, email,city,state,creditcardnumber,expmonth,expyear,ccv,creditcardname))
			console.log(datosCompra)
			
			//Confirmada la operacion, se envia el mail con los datos del cliente y el array del pedido al mail del vendedor
			fetch("https://formsubmit.co/ajax/latradicioncarnicerias@gmail.com", {
				method: "POST",
				headers: { 
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					name: "Ha ingresado una nueva compra",
					message: (nuevoPedido.map(n =>`${n.cantidadValor}kg. de ${n.nombreItemProd} Precio $${n.precio} Total Item $${n.total}\n`).join("") + (`TOTAL $${monto}\n`) + (datosCompra.map(m =>`NOMBRE: ${m.nombreCliente} \n DNI: ${m.dniCliente} \n DIRECCION: ${m.direccionCliente} \n TELEFONO: ${m.telefonoCliente} \n EMAIL: ${m.emailCliente} \n CIUDAD: ${m.ciudadCliente} \n PROVINCIA: ${m.provinciaCliente} \n NUMERO DE TARJETA: ${m.numeroTarjeta} \n MES VENCIMIENTO: ${m.mesVenc} \n AÑO VENCIMIENTO: ${m.anoVenc} \n COD SEG: ${m.codigTarjeta} \n NOMBRE EN TARJETA: ${m.nombreTarjeta}`))
					)
				})
			})
				.then(response => response.json())
				.then(data => console.log(data))
				.then((data) =>	{
					Swal.fire({
						title: 'Operacion Enviada!',
						icon: 'success',
						text: 'Nos comunicaremos con usted para confirmar que la operación ha sido concretada',
					}).then(function(){ 
						compraConfirmada.innerText = "Pagar";
						localStorage.clear();
						location.reload();
						}
					 );
				})
				.catch(error => console.log(error));



			};

		});
	};
};

};
