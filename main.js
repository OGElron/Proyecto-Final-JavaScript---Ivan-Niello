// carrito de compras de un negocio
class logIn {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
// AGREGADO NUEVO PARA REENTREGA
let username = prompt("Ingrese su nombre de usuario");
let email = prompt("ingrese su correo electrónico"); 
let password = prompt("ingrese su contraseña");

console.log (username, email, password)

//arrays para items
let tiendita = [remera1, remera2, remera3, remera4, gorra1, gorra2, mousepad1, mousepad2]
console.log (tiendita)
//arrays para stock/precios 

//funcion flecha para sumar articulos disponibles y mostrar precio total
//para futuro proyecto final
const precioTotal = (a, b) => a+b
let remera = 1500;
let gorra = 600;
let mousepad = 2100;

console.log(precioTotal(1500,1600))

precioTotal (remera, gorra);
console.log (precioTotal(remera, gorra))

//funcion para controlar stock y avisarle al user si hay disponibilidad
stockRemera = 2
stockGorra = 3
stockMousepad = 11

let stockDisponible= prompt("Ingrese el artículo del que quiere conocer el stock: 'remera' 'gorra' o 'mousepad' ")

if(stockDisponible == 'remera') {
    alert(stockRemera)
} else if (stockDisponible == 'gorra') {
    alert (stockGorra)
} else if (stockDisponible == 'mousepad') {
    alert (stockMousepad)
} else alert("No tenemos ese articulo")

//stock x clase
class Producto {
    constructor(item, precio, stockDisponible) {
        this.item = item;
        this.precio = precio;
        this.stock = stock;
    }
}
comprarProducto(cantidad); {
    if (this.stock > cantidad) {
        this.stock =this.stock - cantidad;
        let precioTotal =this.precio * cantidad; 
        alert(`Tu carrito: \n
        Producto: ${item} \n
        Cantidad: ${cantidad} \n
        Total: ${precioFinal}`);
    } else {alert("En este momento no temeos stock. Intente más tarde o contactenos")}
}