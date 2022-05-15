//carrito de compras https://www.youtube.com/watch?v=YeFzkC2awTM
//esta linea va para que ninguna funcion se ejecute hasta que el script haya corrido y se haya terminado de cargar
if (document.readyState == 'loading') {
	document.addEventListener("DOMContentLoaded", ready) //---> PRESTAR ATTE A LAS may. ready en este caso es la funcion de abajo, que cuando se cumple me habilita los botones para quitar productos
} else {
	ready()
}

function ready() {
//Button para quitar productos del carrito, que solo aparece si agrego algo al carrito. NOTA poner boton-quitar a la clase de boton que se agrega en el div del carrito creado
let quitarProducto = document.getElementsbyClassName("boton-quitar")

// funcion para la cantidad de botones de Quitar (uno por cada item que hayamos agregado) usando un acumulador. Esto hace que cuando removamos un item que este en 1 lo borre del carrito directamente

for (let i=0; i< quitarProducto.length; i++) {
	let botonQui = quitarProducto[i]
	botonQui.addEventListener('click', quitarProducto) 
	}

    let cantidadInputs= document.getElementsByClassName ("nombre clase del input") //el input es en el carro para seleccionar cantidad

//funcion similar a la anterior, para agregar cantidad solo que contando la cantidad de cada item con el selector del input

for (let i=0; i< cantidadInputs.length; i++) {
    let inputz = cantidadInputs [i]
    inputz.addEventListener('change', cantidadCambiada)
    }

//funcion similar a la anterior, para comprar con el boton y trigerear el carrito

let comprar = document.getElementsByClassName("boton-comprar");
for (let i=0; i< comprar.length; i++) {
	let botonCom = comprar[i]
	botonCom.addEventListener('click', comprarPro) 
	}
}

function cantidadCambiada (e) {
    let inputz = e.target;
    if (isNaN(inputz.value) || inputz.value <=0) {
        inputz.value = 1 // esta parte de la fx es para que no ingresen cant 0 o num negativos
    }
    precioTotal();
}

function comprarPro  (e) {
    let botonCom = e.target;
    var itemTienda = botonCom.parentElement.parentElement //ojo aca. Le estoy diciendo a la funcion que me busque el div padre del boton, y el div padre de ese div padre. En nuestro caso, la tarjeta. Ver que este bien explicito el path que queremos usar. 
    var nombreCarrito = itemTienda.getElementsByClassName("clase-de-nombre-en-la-card") [0].innerText //esto me da el contenido primer item 
    var precioCarrito = itemTienda.getElementsByClassName("clase-del-precio-de-la-card") [0].innerText //esto me da el contenido primer item 
//var imagenCarrito = itemTienda.getElementsByClassName("clase-del-imagen-de-la-card") [0].src 
    agregarItemAlCarrito (nombreCarrito, precioCarrito); //e imagen carrito si la llevara
    precioTotal();
}

function agregarItemAlCarrito (nombreCarrito, precioCarrito) {
    let filaCarrito = document.createElement('div');
    filaCarrito.classList.add ("nombre-de-la-clase-de-la-fila-del-carrito-para-el-css")
    let itemCarrito = document.getElementsByClassName("clase-items-carrito") [0]
    let nombreItemsEnCarrito = document.getElementsByClassName("clase-nombre-items-en-cards")
    for ( let i=0; i < nombreItemsEnCarrito.length; i++) {
        if (nombreItemsEnCarrito[i].innerText == nombreCarrito) {
        swal({
            title: "Este articulo ya esta en el carrito",
            text: "Si queres comprar otro sumalo en cantidad en el carrito",
            icon: "error",
            button: "Continuar"
        }); return //return en este caso significa volver a la funcion, es decir no ejecuta el volver a agregar nada al carrito
        }
    }

    let contenidoItemCarrito = `
        <div> con las cosas con las que hayamos decidido hacer cart -row para que sean igual
        a los que ya hicimos las row anteriores del carrito incluidos: ${nombreCarrito} y ${precioCarrito}
        para que me valide lo delos parent de la fx
        
        `
    filaCarrito.innerHTML = contenidoItemCarrito    
    itemCarrito.append(filaCarrito);
    filaCarrito.getElementsByClassName('clase-botonQui')[0].addEventListener('click', quitarProducto)
    filaCarrito.getElementsByClassName('clase-inputz')[0].addEventListener('change', cantidadCambiada)
}
// esta parte de la funcion que viene de la de arriba, es para que cuando no haya items en el carrito no nos quede el div con un total vacio
//NOTA cambiar el div contenedor de tarjetas al nombre que de hecho tienen los div contenedores de tarjeta
function precioTotal() {
	let divContenedorDeTarjetas = document.getElementsByClassName('cont-contTarjetas')[0] //ponemos [0] para que tome exclusivamente el primer item del array o sea, del contenedor de tarjetas
	let contTarjeta = divContenedorDeTarjetas.getElementsByClassName('cont-tarjeta');
	for (let i=0; i< contTarjeta.length; i++){
		let conTarjeta = contTar [i] //este marca el item en el que estoy dentro del array
		let precioItem = conTarjeta.getElementsByClassName('precio-item') [0] //aca simplemente le digo a la maquina de donde sacar el precio dentro de la tarjeta 
		let cantidadItem = conTarjeta.getElementsByClassName('cantidad-item') [0] //aca le indicamos la cantidad 
		//----
		let precio = precioItem.innerText //esto deberia devolver el precio que figura en la tarjeta. si TIene el signo $ u otro caracter que no sea un numero, 
											//recordar parsear <let precio= parseFloat(priceElement.innerText.replace('$', '')) > el replace es para sacar los signos con nada
		let cantidad = cantidadItem.value //aca tenemos .value porque es un pinput
	total = total (precio * cantidad)
		}
        //total = Math.round(total * 100) / 100 ---- esta parte de la funcion es para que el resultado siempre redondee y se quede en 2 decimales
	document.getElementsByClassName('precio-total-carrito').innerText = $ + total
	
}