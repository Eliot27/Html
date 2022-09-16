// las funciones pueden ser void = vacias
// con parametros que las variables cambien con el tiempo
// pero tambien las funciones tiene el return
// que retorna un valor que puede ser almacenado
// en una nueva variale

function suma(numero1,numero2) {
    let resultado = numero1 + numero2;    
    return resultado;    
}

let resPantalla = suma(10,15);
document.write(resPantalla + "<br>");

function saludar(nombre) {
    let frase = `Hola forerunner ${nombre}`;
    document.write(frase + "<br>");    
}
saludar("Eliot");

// funciones flecha clasico
const saludo = function saludos(nombre) {
    let frase = `Hola Humano ${nombre}`;
    document.write(frase + "<br>");   
}
saludo("Manuel")

// funciones flecha actuales
// las funciones flecha son funciones que no tienen nombre
// o sea son funciones anonimas
// estas funciones pueden llevar atributos
// y tambien retornar valores
// se puede usar e diferentes maneras como
// 1 . sin parentesis en los atributos
// const saludo = nombre => {
//    document.write(nombre)
// }
// 2 . sin llaves y activando el return sin llamar
// la forma mas optima es esta ultima
// const saludo = nombre => document.write(nombre);

const prueba = (nombrex) => document.write(nombrex)
prueba("hola")
console.log(prueba);