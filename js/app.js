//------- carrito
// if (document.readyState == 'loading') {
// 	document.addEventListener("DOMContentLoaded", ready) //---> PRESTAR ATTE A LAS may. ready en este caso es la funcion de abajo, que cuando se cumple me habilita los botones para quitar productos
// } else {
// 	ready()
// }
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
let username = document.querySelector("#login_nombre").value;
let email = document.querySelector("#login_correo").value; 
let password = document.querySelector("#login_contraseña").value;
//carrito
let tiendita = document.querySelector("#contenedorCards")
const carritoz = document.querySelector("#carritoz");
const carritoz2 = document.querySelector("#closero")
const carrito_overlay = document.querySelector(".carrito_overlay"); 
const btnCompraz = document.getElementsByClassName("btnCompra"); //array
const carrito = []
const addCarrito = document.getElementById("addCarrito");
const vaciarCar = document.getElementById("vaciar_car")
const numCar = document.getElementById("num_car")
const precioTotal = document.getElementById("precioTotal")
const pagar = document.getElementById("checkout")
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

//validación
//error en la validacion

function validateForm () {
    if (localStorage.getItem("userLogged")=== null)
         {
        swal({
            title: "Ingresa para seguir",
            text: "Para poder continuar llena todos los campos con tus datos",
            icon: "error",
            button: "Ingresar nuevamente"
        })}
      else (
          swal({
        title: "Usuario ingresado",
        text: "Puede continuar con la compra",
        icon: "success",
        button: "Continuar"
    }))    
  }

//Tienda

//fetch a base de datos con los items en la tienda
fetch ("./js/data.json")
    .then (res => res.json())
    .then (tienda => {
        tiendita = tienda
        cardYbuttons (tiendita)
        })
//creador de cards para la tienda
const contenedorCards = document.getElementById("contenedorCards")

const cardYbuttons =(array) => {

    contenedorCards.innerHTML=""

    array.forEach((tiendita)=> {

        const divCard = document.createElement('div');

        divCard.classList.add('cards')

         divCard.innerHTML = `
                            <h4 class="nombre_item"> ${tiendita.item}</h4>

                            <p class= "categoria_item"> ${tiendita.categoria} </p>

                            <p class= "precio_item"> ${tiendita.precio} </p>

                            <img src ="${tiendita.thumbnail}">
                            
                            <button id="add${tiendita.id}" class="btnCompra"> COMPRAR </button>

                            `
        contenedorCards.append(divCard)
//boton de compra
        const boton = document.getElementById(`add${tiendita.id}`)
        boton.addEventListener("click", () => {
            agregarCarrito(tiendita.id)
        })
    })

}

//filtros
const filtroDefault = document.getElementById("default")

const filtro1500 = document.getElementById("mn1500")

const filtro1000 = document.getElementById("mn1000")

const filtro750 = document.getElementById("mn750")

const filtroDefault2 = document.getElementById("default2")

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


//CARRITO/fx

//abrir carrito
carritoz.addEventListener("click", ()=> {
    carrito_overlay.classList.add("open");
})

//vaciar carrito 
vaciarCar.addEventListener("click", ()=>{
    carrito.length = 0
    inCarrito ();
})
//cerrar carrito
carritoz2.addEventListener("click", (e)=>{
    if(e.target.classList.contains("carrito_overlay")){
        carrito_overlay.classList.remove("open");
    }
})
carrito_overlay.addEventListener("click", ()=>{
        carrito_overlay.classList.remove("open");
    })

// carrito itself
//agregar al Carrito
const agregarCarrito = (prodID) => {
    const itemz = tiendita.find((tiendita) => tiendita.id === prodID);
    if (carrito.includes(itemz)) {
        swal({
            title: "Atencion",
            text: "Este item ya fue ingresado. Si quiere más de uno continue, sino recuerde elminarlo del carrito haciendo click en el boton adyacente",
            icon: "warning",
            button: "Entendido"
            })
    }
    carrito.push(itemz);
    inCarrito();
}
//quitar del Carrito
const quitarCarrito = (prodID) => {
    const itemz = carrito.find ((tiendita)=> tiendita.id === prodID)
    const indice = carrito.indexOf(itemz);
    carrito.splice(indice, 1);
    inCarrito();
}
 
 
//imprimir/ ver el carrito
const inCarrito = () => {
    addCarrito.innerHTML= ""
    carrito.forEach((tiendita) => {
        const div = document.createElement('div')
        div.className = "produComprado"
        div.innerHTML = `
            <p class="prodNom" >${tiendita.item}</p>
            <p class="prodPrec">${tiendita.precio}</p>
            <button onclick= "quitarCarrito(${tiendita.id})" class="btn-dngr"> x </button>
            `
    addCarrito.appendChild(div);       
    }) 
   //numero en icono Carrito
   numCar.innerText = carrito.length
   //precio Total 
   precioTotal.innerText = carrito.reduce ((acc,prod)=> acc + prod.precio, 0);
    //pagar (acá iriamos a la info de la tarjeta)
    pagar.addEventListener("click", ()=>{
        swal({
    title: "Gracias por tu compra!",
    text: "Su tarjeta ha sido clonada y se utilizará para fines maléficos",
    icon: "success",
    button: "Entendido"
    });
    carrito.length = 0
    inCarrito ();
})
}