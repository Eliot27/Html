const res = (resultado)=>{
    document.write(resultado + "<br>");
}

let cadena = " cadena de prueba xd xd";
let cadena2 = "dx/dt xd";
let cadena3 = "     cadena     ";
let cadena4 = "xd";
let cadena5 = "hola,como,estas";
let cadena6 = "ABCDEFGHI";
let cadena7 = 145.1225;
let cadena8 = { 
    ["cero"]:["once"],
    "propiedad": "espacio"
}

//concat
//result = cadena.concat(" Hola");
res(cadena.concat(" Hola"))
//result = cadena.concat(cadena2);
res(cadena.concat(cadena2));

//startWith verifica que lo que dice al inicio
// sea igual en las dos cadenas
// si es asi es true
res(cadena.startsWith(cadena3));
// si no es false
res(cadena.startsWith(cadena2));
//endWith es lo mismo solo que con el final de la cadena
res(cadena.endsWith(cadena4));
//includes busca el texto dentro de la cadena si es asi retorna true si no false
res(cadena.includes(cadena4));
//indexOf la palabra que ponga en la cadena
// dira en que posicion esta dentro de la cadena de texto
res(cadena.indexOf(cadena4));
// si no aparece dentro de la cadena devuelve -1
res(cadena.indexOf("nose"));
// posicion del arreglo de el string
res(cadena[7]+ cadena4[1]);
// el ultimo dentro de la cadena
res(cadena.lastIndexOf("xd"))
// rellenar con caracteres al principio
res(cadena4.padStart(10, "Dx"));
// rellenar con caracteres al final
res(cadena4.padEnd(10, "1"));
// repite la cadena que ya tenemos
res(cadena.repeat(2));
// split dividi la cadena como le pidamos
// genera un array separando lo que necesitas
resx = cadena5.split(",");
res(resx);
res(resx[0])
// substring coge una cadena de string
// desde una longitud inicial hasta un final
res(cadena6.substring(0,3));
// toLowerCase convierte las cadenas a minusculas
res(cadena6.toLocaleLowerCase());// de forma local
res(cadena6.toLowerCase())// de forma global
// toUpperCasa de minisculas a mayusculas
res(cadena.toUpperCase());
// toString convierte numero o caracteres hexa en string
res(cadena7.toString());
// trim elimina espacios de las cadenas de texto
res(cadena3.length);
res1 = cadena3.trim();
res(res1.length);
res(res1);
// trimEnd elimina los espacios del final
// trimStart elimina los espacios del inicio
// valueOf retorna el valor primitivo de un objeto string
res(cadena8.valueOf());















