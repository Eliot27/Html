const res = (resultado)=>{
    document.write(resultado + "<br><br>");
}

let cadena = ["Eliot", "Meiby", "Ethan", "Manuel"];

// pop elimina el ultimo nombre
let result1 = cadena.pop();
res("Hizo Pop a: "+ result1);
res(cadena);

// shift elimina el primero
let result2 = cadena.shift();
res("Hizo shift a: "+result2);

// push agrega un elemento al arreglo
let result3 = cadena.push("Juan", "Marcela");
res("el numero de objetos paso de 2 a " + result3);
res(cadena);

// reverse invierte el orden de los elementos 
//de un arreglo
let numeros = [1,0,3,4,2,6,5,8,7,9];
res("Lista desordenada = "+numeros);
let result4 = numeros.reverse();
res("Lista reverse = "+result4);

// unshift agrega uno o mas elementos al 
//inicio del arreglo y 
//devuelve la longitud del arreglo
let result5 = numeros.unshift(11,12,10,22,33,45,0.15);
res(numeros);

// sort ordena los elementos de un arreglo
// y devuelve la nueva longitud del arreglo
res("Lista ordenada = "+numeros.sort());
res("Nombres ordenados = "+cadena.sort());

// splice cambia el contenido de un arreglo
// eliminando elementos existentes y
// agregando nuevos elementos.
cadena.splice(1,3);
cadena.splice(0,0,"Diomira","Jesus");
res(cadena);

// Join convierte un arreglo en una cadena de texto
let result6 = cadena.join(" - ");
res("Cadena de texto = "+result6);

// Slice corta una parte del arreglo
let result7 = cadena.slice(1,3);
res("El arreglo ahora es = "+result7);

// includes busca un elemento en el arreglo
let result8 = cadena.includes("Meiby");
res("El arreglo incluye Meiby? =  "+ result8);

// indexOf busca un elemento en el arreglo
let result9 = cadena.indexOf("Ethan");
res("El arreglo incluye Ethan? =  "+ result9);

// lastIndexOf busca un elemento en el arreglo
let result10 = cadena.lastIndexOf("Ethan");
res("El arreglo incluye Ethan? =  "+ result10);

// Filter filtra los elementos de un arreglo
// y devuelve un nuevo arreglo con los elementos
// que cumplen con la condicion
let result11 = cadena.filter(nombre => nombre.length > 5);
res("Los nombres que cumplen con la condicion son: "+result11);

res(cadena.filter(nombre => document.write(nombre + "<br>")));

// forEach recorre el arreglo y ejecuta una funcion
// por cada elemento
res("forEach")
cadena.forEach(nombre => document.write(nombre + "<br>"));



