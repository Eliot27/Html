let cadena = 'texto';
console.log(cadena);

let cadena2 = new String('texto2');
document.write("El tipo de dato de cadena2 es: " + typeof(cadena2) + "<br/>");
document.write("Los metodos son aquellos que estan dentro de una clase" + "<br/>");
let indexString = cadena2.charAt(1);
document.write(indexString + "<br/>");
let cadena3 = "hola mundo";
document.write(cadena3.toUpperCase());
document.write("<br/><br/>");
document.write("-----------------------------------------------------------------"+ "<br/>");
document.write("---- Metodo trim String ---------------"+ "<br/>");
let cadena4 = '    hola     mundo    ';
document.write(cadena4 + "Sin trim"+ "<br/>");
document.write(cadena4.trim().toUpperCase() + "<br/>");
