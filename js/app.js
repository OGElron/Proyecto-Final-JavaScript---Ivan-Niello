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
    

let precioTotal = 0

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

                            <button id= "btnCompra"> Comprar </button>

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
    const filtroRemeras = tiendita.filter(el => el.categoria === "remera")
    cardYbuttons(filtroRemeras)
})
filtroGorras.addEventListener("click", () => {
    const filtroGorras = tiendita.filter(el => el.categoria === "gorra")
    cardYbuttons(filtroGorras)
})
filtroTazas.addEventListener("click", () => {
    const filtroTazas = tiendita.filter(el => el.categoria === "taza")
    cardYbuttons(filtroTazas)
})
filtroMspads.addEventListener("click", () => {
    const filtroMspads = tiendita.filter(el => el.categoria === "mousepad")
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
