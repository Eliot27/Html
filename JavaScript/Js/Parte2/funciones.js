/*
    Las funciones son objetos, por lo tanto pueden ser pasadas como parámetros
    a otras funciones.
    
    funtion nombre (parametro, parametro, ...){
        //código
        return valor; // el valor que retorna la función
    }
*/

// este tipo de funcion se beneficia del hoisting
// es decir que se puede llamar antes de declararla
// ya que el motor de javascript la lee antes de ejecutar el código
// y la guarda en memoria
// y cuando se ejecuta el código la encuentra en memoria
// y la ejecuta
// esto no es recomendable
// ya que puede generar errores
// y es mejor declarar las funciones antes de usarlas
// y no despues
function traerDelSupermercado(producto1, producto2) {
  console.log("La compra fue exitosa");
  return `Te compre ${producto1} y tambien ${producto2}`;
}

// este tipo de funcion no se beneficia del hoisting
// es decir que no se puede llamar antes de declararla
let miCompra = function (producto1, producto2) {
  console.log("La compra fue exitosa");
  return `Te compre ${producto1} y tambien ${producto2}`;
};

let Dato = miCompra("pan", "leche");
document.write(Dato + "<br/><br/>");

// Funciones Flecha
// es una forma mas corta de escribir funciones
// se declaran con la palabra reservada "function"
// seguida de los parametros
// seguido de una flecha =>
// seguido de las instrucciones
// seguido de un return
// seguido del valor a retornar

const funcionFlecha = (parametro1, parametro2) => {
  console.log("La funcion flecha fue exitosa");
  return `la funcion flecha retorno ${parametro1} y ${parametro2}`;
};

let rec = funcionFlecha("flecha verde", "flecha roja");
document.write(rec + "<br/><br/>");

// Regresar un objeto en una funcion flecha
const regresaObjeto = () => ({ nombre: "Eliot", apellido: "Gomez" });
console.log(regresaObjeto());
document.write(regresaObjeto().nombre, " ",regresaObjeto().apellido, "<br/><br/>");

// Funciones Callback
// son funciones que se pasan como parametros a otras funciones
// y se ejecutan dentro de la funcion que las recibe
// es decir que se ejecutan dentro de la funcion que las recibe
// y no fuera de ella
function comprar(articulo1, articulo2, funcionCallback) {
    articulo1 = 65;
    articulo2 = 70;
    let total = articulo1 + articulo2;
    funcionCallback(total);  
}

function funcionCallback(mensaje) {
    document.write(`La suma de los articulos es: ${mensaje} <br/><br/>`);    
}

comprar('xbox','play', funcionCallback);
    




