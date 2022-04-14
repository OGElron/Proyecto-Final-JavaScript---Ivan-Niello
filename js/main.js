// carrito de compras de un negocio
//LOGIN
class logIn {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

let username = prompt("Ingrese su nombre de usuario");
let email = prompt("ingrese su correo electrónico"); 
let password = prompt("ingrese su contraseña");

console.log (username, email, password)

// compra x cantidad
//let cantidad = parseInt(prompt("cuantas unidades queres?"));
// También me gustaría sumarle un acumulador: acumulador(i) {cantidad + i++}
// let cantidad= 0
//--------------------
//stock x clase

class Producto {
    constructor(item, categoria, precio, stock) {
        this.item = item;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    //stock
    comprarProducto(cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
            } else {alert("En este momento no tenemos stock. Intente más tarde o contactenos")}
            console.log(this.stock);}
    sumaIva() {this.precio * 1.21}; 
    }

/* Alerta, de carrito de compra. alerta que no funciona. 
Si esta dentro de la class no me marca error, pero no da la alerta. 
Si esta fuera me marca undefined. 

alert(`Tu carrito: \n
    Producto: ${item} \n
    Cantidad: ${cantidad} \n
    Total: ${precioTotal}`);    
*/

const Case1 = new Producto ("case1", "acceCel", 850, 20);

Case1.sumaIva (Case1);

//Array: stock de la tienda
let tiendita = [{item: "remera1", categoria: "remera", precio:1300, stock:5}, 
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

tiendita.push(Case1);
console.log(tiendita);

console.log(tiendita.indexOf(Case1));

let nuevoProducto= prompt("¿que diseño te gustaria que agreguemos?")
tiendita.push(nuevoProducto);
console.log(tiendita);

//Filtros de busqueda
const filtroMenor1500 = tiendita.filter (el=>el.precio < 1500);
console.log(filtroMenor1500);
const filtroMenor1000 = tiendita.filter (el=>el.precio < 1000);
console.log(filtroMenor1000);
const filtroMenor750 = tiendita.filter (el=>el.precio < 750);
console.log(filtroMenor750);

//dejo estos aca porque no pude deducir cómo configurarlos y me gustaria aprender:
// const BuscarPrecioMayorA = tiendita.map (el=>el.precio > parseInt(prompt("ingrese precio mínimo")));
// console.log(BuscarPrecioMayorA);
// const buscar = tiendita.find (el=>el.categoria=prompt("Seleccione una de las categorías: 'remera', 'gorra', 'taza', 'varios','acceCel'")));
// console.log(buscar);
