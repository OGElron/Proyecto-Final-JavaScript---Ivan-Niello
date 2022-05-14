//------- carrito

/*Entidades*/
class LogIn {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
/*Variables*/
//login
userLogged = [];

let accessz = document.getElementById("form_regis");

let tiendita = document.querySelector("#contenedorCards")
fetch ("./js/data.json")
    .then ((res) => res.json())
    .then ((tienda) => {
        tiendita = tienda
        cardYbuttons (tiendita)
        })

const contenedorCards = document.getElementById("contenedorCards")

let username = document.querySelector("#login_nombre").value;
let email = document.querySelector("#login_correo").value; 
let password = document.querySelector("#login_contraseña").value;

//carrito
//const carrito = JSON.parse(localStorage.getItem('carrito')) || []

/*Funciones*/
//login
const logInz = () => {
    let username = document.querySelector("#login_nombre").value;
    let email = document.querySelector("#login_correo").value; 
    let password = document.querySelector("#login_contraseña").value;

    const nuevoUser = new LogIn (username, email, password);
    // userLogged.push(nuevoUser);

    let listaUsers = [];
    if(localStorage.getItem("userLogged") != null) {
        listaUsers = JSON.parse(localStorage.getItem("userLogged"));
        listaUsers.push(nuevoUser);
        localStorage.setItem("userLogged", JSON.stringify(listaUsers));
    } else { 
        userLogged.push(nuevoUser);
        localStorage.setItem("userLogged", JSON.stringify(listaUsers));
    } 
    console.log(nuevoUser)
    return nuevoUser;
}

/*Event*/

function Acceder (e) {
    e.preventDefault();
    validateForm();
    logInz();
}
accessz.addEventListener("submit", Acceder)

//creador de cards para la tienda

const cardYbuttons=(array) => {

    contenedorCards.innerHTML=""

    array.forEach((tiendita)=> {

        const divCard = document.createElement('div');

        divCard.classList.add('cards')

         divCard.innerHTML = `
                            <h4 class="nombre_item"> ${tiendita.item}</h4>

                            <p class= "categoria_item"> ${tiendita.categoria} </p>

                            <p class= "precio_item"> ${tiendita.precio} </p>

                            <img src ="${tiendita.thumbnail}">
                            
                            <button class= "btnCompra"> COMPRAR </button>

                            `
        contenedorCards.append(divCard)

    })

}

//-----filtros
const filtroDefault = document.getElementById("default")

const filtro1500 = document.getElementById("mn1500")

const filtro1000 = document.getElementById("mn1000")

const filtro750 = document.getElementById("mn750")

const filtroDefault2 = document.getElementById("default")

const filtroRemeras = document.getElementById("remeras")

const filtroGorras = document.getElementById("gorras")

const filtroTazas = document.getElementById("tazas")

const filtroMspads = document.getElementById("mspads")

const filtroOtros = document.getElementById("otros")

filtroDefault.addEventListener("click", () => {
    cardYbuttons(tiendita);
})

filtro1500.addEventListener("click", () => {
    const filtroMenor1500 = tiendita.filter (el=>el.precio < 1500);
    cardYbuttons(filtroMenor1500);
})

filtro1000.addEventListener("click", () => {
    const filtroMenor1000 = tiendita.filter (el=>el.precio < 1000);
    cardYbuttons(filtroMenor1000);
})

filtro750.addEventListener("click", () => {
    const filtroMenor750 = tiendita.filter (el=>el.precio < 750);
    cardYbuttons(filtroMenor750);
})

filtroDefault2.addEventListener("click", () => {
    cardYbuttons(tiendita);
})

filtroRemeras.addEventListener("click", () => {
    const filtroRemeras = tiendita.filter(el => el.categoria === "Remera")
    cardYbuttons(filtroRemeras)
})
filtroGorras.addEventListener("click", () => {
    const filtroGorras = tiendita.filter(el => el.categoria === "Gorra")
    cardYbuttons(filtroGorras)
})
filtroTazas.addEventListener("click", () => {
    const filtroTazas = tiendita.filter(el => el.categoria === "Taza")
    cardYbuttons(filtroTazas)
})
filtroMspads.addEventListener("click", () => {
    const filtroMspads = tiendita.filter(el => el.categoria === "Mousepad")
    cardYbuttons(filtroMspads)
})

//validación
//error en la validacion

function validateForm () {
        if ((username == "") || (email == "") || (password == ""))
             {
            swal({
                title: "Ingresa para seguir",
                text: "Para poder continuar llena todos los campos con tus datos",
                icon: "error",
                button: "Ingresar nuevamente"
            });
          return false;
        }
      }

// esto queda comentado porque era la entrega anterior y todavia no me decido si va en el proyecto final, probablemente no
// reentrega operadores ternarios
// const tiendita2 = [
//     {item:"mousepad3",categoria: "mousepad",precio:450,stock: 9}]
// const tiendita3 = [...tiendita, ...tiendita2]
// // aqui hago un console log para que se entienda que funciona, pero la idea usando este operador seria agregar items a la tiendita en el futuro
// console.log(tiendita3)

//CARRITO
//variables
const carritoz = document.querySelector("#carritoz");
const carrito_overlay = document.querySelector(".carrito_overlay"); 
const btnCompraz = document.getElementsByClassName("btnCompra"); //array
console.log(btnCompraz)
const filas = document.getElementsByClassName("filas"); //deberia dar un array
//abrir carrito
carritoz.addEventListener("click", ()=> {
    carrito_overlay.classList.add("open");
})
//cerrar carrito
carrito_overlay.addEventListener("click", (e)=>{
    if(e.target.classList.contains("carrito_overlay")){
        carrito_overlay.classList.remove("open");
    }
})

//comprar
//determinar card x boton
for(let i=0; i < btnCompraz.length; i++){
    let boton = btnCompraz[i];
    boton.addEventListener("click", agregarCarrito)
}

function agregarCarrito (e) {
    let boton = e.target;
    let prodComprado = boton.parentElement //aca deberia estar en el div 'cards' 
    console.log(prodComprado)
}
//     let itemf = prodCompra.getAt tribute("item");
//     let preciof = prodCompra.getAttribute("precio");
//     let imagenf = prodCompra.querySelector("thumbnail");
//     let itemId = prodCompra.querySelector("id")
    
//     llenarCarrito(itemf, preciof, imagenf)
// }
// function llenarCarrito(itemf, preciof, imagenf) {
//     let filaProducto = document.createElement("div");
//     let filas = document.querySelector(".filas");


// //producto agregado? 
//     for (let i=0; i< filas.length; i++) {
//         if(filas[i].getAttribute("id")==itemId) {
//             swal({
//                 title: "Atención",
//                 text: "Este producto ya fue agregado, si quieres más, modifica la cantidad",
//                 icon: "alert",
//                 button: "Continuar"
//             });
//             return;
//         }
//     }
//     //crear el html al carrito
//     let carritoz = `
//     <div class="filas" id="${itemId}">
//     <img class= "imagen_carrito" src"${imagenf}">
//     <span>${itemf}</span>
//     <span class="precioz">${preciof}</span>
//     <input class="prod_cantidad" type="number" valor="1">
//     <button class="quitarProd">Quitar</button>
//     </div>`
//     filas.innerHTML = carritoz;
//     filaProducto.append(filas);
//     filas.querySelector(".quitarProd").addEventListener("click", removeItem);
//     filas.querySelector(".prod_cantidad").addEventListener("change", cambiarCantidad);
//     precioTotal();
// }

// //eliminar elemento del carrito
// function quitarProducto (e) {
// 		let botonClicked = e.target
// 		botonClicked.parentElement.parentElement.remove();
// 		precioTotal ();
// }

// //cantidad
// function cantidadCambiada (e) {
//     let inputz = e.target;
//     if (isNaN(inputz.value) || inputz.value <=0) {
//         inputz.value = 1 // esta parte de la fx es para que no ingresen cant 0 o num negativos
//     }
//     precioTotal();
// }

// //total
// function precioTotal() {
//     let total = 0;
//     for (const producto of filas) {
//         let precio = producto.querySelector(".precioz").inner.Text;
//         let cantidad = producto.querySelector(".prod_cantidad").value; 
//         total += precio*cantidad;
//     }
//     document.querySelector(".precioTotal").innerText = "$"+ total //tener un 0 con una class aca?? 
// 	document.querySelector("product-quantity").textContent = filas.length
// } 