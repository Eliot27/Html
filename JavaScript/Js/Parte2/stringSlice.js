let words = "Hola Mundo";
document.write('el metodo slice recorta los strings desde una posicion inicial hasta una final del arreglo de strings'+ "<br/>");
document.write(words.slice(5,10) + "<br/>");

let ingresadoPorElUsuario = "$ 523.36";
let pesosUser = Number(ingresadoPorElUsuario.slice(2));
document.write(pesosUser + "<br/>");
document.write(typeof pesosUser + "<br/>");
