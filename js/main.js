// carrito de compras de un negocio
/*Entidades*/
class LogIn {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
class Producto {
    constructor(item, categoria, precio, stock) {
        this.item = item;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}
/*Variables*/
//login
userLogged = [];
let accesz = document.getElementById("accesz");
//tienda
let tiendita = [
    {item: "remera1", categoria: "remera", precio:1300, stock:5}, 
    {item: "remera2", categoria: "remera", precio:1300, stock: 12},
    {item: "remera3", categoria: "remera", precio:1400, stock: 11},
    {item: "remera4", categoria: "remera", precio:1400, stock: 13},
    {item: "gorra1", categoria: "gorra", precio:990, stock:8},
    {item: "gorra2", categoria: "gorra", precio:990, stock: 6},
    {item: "taza1", categoria: "taza", precio:650, stock: 20},
    {item: "taza2", categoria: "taza", precio:650, stock:23},
    {item: "mousepad1", categoria: "varios", precio:750, stock:0},
    {item: "mousepad2", categoria: "varios", precio:750, stock: 3}]
console.log(tiendita)

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
const filtroMenor1500 = tiendita.filter (el=>el.precio < 1500);
console.log(filtroMenor1500);
const filtroMenor1000 = tiendita.filter (el=>el.precio < 1000);
console.log(filtroMenor1000);
const filtroMenor750 = tiendita.filter (el=>el.precio < 750);
console.log(filtroMenor750);

const oculTar = () => {
    let tar = document.querySelectorAll(".tar")
    if (tar.h2 == filtroMenor750){
        tar.classlist.add("ocultar")
    }
} 

//producto
const producto = () => {
    let item = document.querySelector("#nuevo_item").value;
    let categoria = document.querySelector("#nuevo_categoria").value; 
    let precio = document.querySelector("#nuevo_precio").value;
    let stock = document.querySelector("#nuevo_stock").value;

    const nuevoProducto = new Producto (item, categoria, precio, stock);
    console.log(nuevoProducto);
    tiendita.push(nuevoProducto);
}

const comprarProducto =(cantidad) => {
    if (this.stock > cantidad) {
        this.stock - cantidad;
        console.log(this.stock);
        } else {alert("En este momento no tenemos stock. Intente más tarde o contactenos")}
        console.log(this.stock);
    }


/*Event*/

accesz.addEventListener("click",(e) => {
    e.preventDefault();
    logInz();
})



oculTar();


/* Alerta, de carrito de compra. alerta que no funciona. 
Si esta dentro de la class no me marca error, pero no da la alerta. 
Si esta fuera me marca undefined. 

alert(`Tu carrito: \n
    Producto: ${item} \n
    Cantidad: ${cantidad} \n
    Total: ${precioTotal}`);    
*/
