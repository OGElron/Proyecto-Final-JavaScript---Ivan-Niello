// carrito de compras de un negocio
/*Entidades*/
class Producto {
    constructor(item, categoria, precio, stock) {
        this.item = item;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}
/*Variables*/
let cargar = document.querySelector("#cargar");
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

/*Funciones*/

const producto = () => {
    let item = document.querySelector("#nuevo_item").value;
    let categoria = document.querySelector("#nuevo_categoria").value; 
    let precio = document.querySelector("#nuevo_precio").value;
    let stock = document.querySelector("#nuevo_stock").value;

    const nuevoProducto = new Producto (item, categoria, precio, stock);
    
    tiendita.push(nuevoProducto);
    console.log(tiendita)
}

/*Event*/

cargar.addEventListener ("click",(e)=> {
    e.preventDefault();
    producto();
})
