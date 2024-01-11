/*/Pre-entrega1:


let frutilla = 8;
let mantequillaAlmendras = 12;
let avellanas = 56;
let totalApagarFrutilla = 0;
let totalApagarAvellanas = 0;
let totalApagarmantequillaAlmendras= 0;


alert ("Productos disponibles son Frutilla: 8usd el kilo,mantequillaAlmendras: 12usd la unidad y avellanas: 56usd el kilo")

productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) e ingrese salir cuando no quiera elegir más productos")
cantidadDeseada = prompt("Ingrese cantidad deseada")
let totalApagar = 0

while (productoElegido!= "salir" ){
    if (productoElegido == "frutilla"){
        totalApagarFrutilla = cantidadDeseada * frutilla;
    } else if (productoElegido == "avellanas"){
        totalApagarAvellanas = cantidadDeseada * avellanas;
        
    }
    else if (productoElegido == "mantequillaAlmendras"){
        totalApagarmantequillaAlmendras = cantidadDeseada * mantequillaAlmendras;
    
    }
    else {
        alert ("Ingrese solo los productos disponibles")
    }
    productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) o ingrese salir cuando no quiera elegir más productos")
    cantidadDeseada = prompt("Ingrese cantidad deseada o ingrese salir si no eligió más productos")
}


function total( totalApagarFrutilla, totalApagarmantequillaAlmendras, totalApagarAvellanas){
    let resultado = totalApagarFrutilla +totalApagarmantequillaAlmendras+ totalApagarAvellanas;
    return resultado;
}

alert (`el detalle de su compra es: 
frutilla : ${totalApagarFrutilla}usd 
mantequillaAlmendras: ${totalApagarmantequillaAlmendras}usd 
avellanas: ${totalApagarAvellanas}usd 
total a pagar es ${total( totalApagarFrutilla, totalApagarmantequillaAlmendras, totalApagarAvellanas)}usd`)/*/

//objetos y sus funcionalidades:


/*/function TiendaEnLinea(categorias, productos) {

    this.categorias = categorias;
    this.productos = productos;

    this.buscarPrecioDeProducto = function(nombre) {
        let producto = this.productos.find((producto) => producto.nombre == nombre);
        return producto.precio;
    }
    this.obtenerProductosPorCategoria = function (nombre){
        return this.productos.filter((producto)=>producto.categoria.nombre == nombre);
     }
}

function Producto(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

function Categoria(nombre) {
    this.nombre = nombre;
}




//instanciación de objetos:

let frutasSecas = new Categoria("Frutas Secas");
let lacteos = new Categoria("Lacteos");
let especias = new Categoria("Especias");
let frutasDesh = new Categoria("Frutas Deshidratadas");
let mantequilla = new Categoria("Mantequillas de Frutos Secos");


let mantequillaDeAlmendras = new Producto("Mantequilla de Almendras", 12,mantequilla );
let mantequillaDeAvellanas = new Producto("Mantequilla de Avellanas", 12.50,mantequilla );
let mantequillaDeCashew = new Producto("Mantequilla de Cashew", 13,mantequilla );

let almendras = new Producto("Almendras", 21, frutasSecas);
let nueces = new Producto("Nueces", 18, frutasSecas);
let avellanas = new Producto("Avellanas", 54, frutasSecas);

let frutillas = new Producto("Frutillas", 8.50, frutasDesh);
let ananas = new Producto("Ananas", 4.5, frutasDesh);
let moras = new Producto("Moras", 4.5, frutasDesh);

let lecheAlmendras = new Producto("Leche de Almendras", 5.5, lacteos);
let lecheCoco = new Producto("Leche de Coco", 5.5, lacteos);
let lecheAvena= new Producto("Leche de Avena", 5.5, lacteos);

let canela = new Producto("Canela", 2.5, especias);
let pimenton = new Producto("Pimentón", 2.5, especias);
let salHimalaya = new Producto("Sal Himalaya", 4.5, especias);

let categorias = [frutasSecas, frutasDesh, especias, lacteos, mantequilla];
let productos = [mantequillaDeAlmendras, mantequillaDeAvellanas, mantequillaDeCashew, almendras, nueces, avellanas, frutillas,
     ananas, moras, lecheAlmendras, lecheCoco, lecheAvena, canela, pimenton, salHimalaya];


let tiendaEnLinea = new TiendaEnLinea(categorias, productos);

//Ejecución del programa:

let mensajeDeBienvenida =`Bienvenidos a la tienda en linea
Escribe el numero de la opción que buscas:
1 -Frutas Secas
2 -Lacteos
3 -Especias
4 -Frutas Deshidratadas
5 -Mantequillas de Frutos Secos

Para volver al inicio escribe 0 
Para salir de la tienda escribe salir 
para finalizar tu compra escribe finalizar
`

let opcionElegida = prompt(mensajeDeBienvenida);
let productoElegido;
let cantidadElegida = 0;
let montoAPagar = 0;

while(opcionElegida != "salir") {

    if (opcionElegida == 1){
        procesarOpcion("Frutas Secas");
    
    } else if (opcionElegida == 2){
        procesarOpcion("Lacteos");
    
    } else if (opcionElegida == 3){
        procesarOpcion("Especias");
    
    } else if (opcionElegida == 4){
        procesarOpcion("Frutas Deshidratadas");
    
    } else if (opcionElegida == 5){
        procesarOpcion("Mantequillas de Frutos Secos");
    
    } else if (opcionElegida == "finalizar") {
        // mostrar resumen
        alert(`El monto a pagar es: ${montoAPagar} usd`);
    } else {
        // salir del programa
    }

    opcionElegida = prompt(mensajeDeBienvenida);
}

function procesarOpcion(categoria) {
    let listaDeProductos = ""
        let productos = tiendaEnLinea.obtenerProductosPorCategoria(categoria);
        productos.forEach(producto => {
            listaDeProductos += `${producto.nombre} ${producto.precio} USD\n`
        });

        productoElegido = prompt(listaDeProductos);
        cantidadElegida = prompt("Ingrese la cantidad deseada");
    
        montoAPagar += tiendaEnLinea.buscarPrecioDeProducto(productoElegido) * cantidadElegida;
}
/*/

function seleccionarProducto(nombre){
    let productos = [];
    alert(nombre+" se ha guardado con exito en el carrito de compras")
    let productosString =  localStorage.getItem("productos");
    if (productosString){
        productos = JSON.parse(productosString);
    }
    
    productos.push(nombre);

    localStorage.setItem("productos",JSON.stringify(productos));

}

function productoFavoritoElegido(nombre){

    let favoritos = [];
   
    let favoritosString =  localStorage.getItem("favoritos");

    if (favoritosString){
        favoritos = JSON.parse(favoritosString);
    }
    const favorito = favoritos.find((unFavorito) => unFavorito === nombre);

    if (favorito){
        let imagenCorazon = document.getElementById("corazon_" + nombre);
        imagenCorazon.src = "../img/heart-regular.svg"; 
        const index = favoritos.indexOf(nombre);
        favoritos.splice(index,1)
    } else{
        let imagenCorazon = document.getElementById("corazon_" + nombre);
        imagenCorazon.src = "../img/heart-solid.svg"; 
        favoritos.push(nombre);
    }
    localStorage.setItem("favoritos",JSON.stringify(favoritos));
}

function seleccionarProducto(nombre){

    // GUARDAR EN EL LS EL PRODUCTO ELEGIDO
    let productos = [];

    let productosString  =  localStorage.getItem("productos");   
    if (productosString) {
        productos = JSON.parse(productosString);
    }

    // si no fue elegido antes, lo agrego al array y actualizo el LS
    if (!productos.includes(nombre)) {
        productos.push(nombre);
        localStorage.setItem("productos", JSON.stringify(productos));
    }
}
   
function cargarPantallaTienda(){
    //leer el LS
    let favoritos = [];
   
    let favoritosString =  localStorage.getItem("favoritos");

    //transformarlo a objeto
    if (favoritosString){
        favoritos = JSON.parse(favoritosString);
    }
    //recorrer objeto
    for(let i = 0; i< favoritos.length; i++){
        let nombre = favoritos[i];
        let imagenCorazon = document.getElementById("corazon_" + nombre);
        imagenCorazon.src = "../img/heart-solid.svg"; 
        console.log(imagenCorazon);
    }
}

cargarPantallaTienda();


