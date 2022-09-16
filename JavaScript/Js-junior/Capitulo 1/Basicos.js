//arrays
let numeros_string = ["hola", "infierno", "1", "2", "3"];
//document.write(numeros_string[1]);

//arrays asociativos
let pc = {
    nombre: "pcx",
    procesador: "intel",
    ram: "1GB",
    hdd: "10GB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let hdd = pc["hdd"];

frase = `El nombre de su pc es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es:<b>${ram}</b> <br>
         el espacio hdd es:<b>${hdd}</b> <br>`;

document.write(frase);

//--------------------------------------------------------//

//bucles, while, do while, for, for in, for of.

//while
document.write("<h5>bucle while</h5>")
let numero = 0;

while (numero < 1000) {
    numero++;  
    document.write(numero);
    if(numero == 10){
        break;
    }
}

document.write("<h5>bucle do while</h5>")
let numerox = 0;
do{
    document.write(numerox + "<br>");
    numerox++;
} while(numerox < 10)

//---------------------------
// ciclos for
document.write("<h5>ciclos for</h5>")

for (let i = 0; i <= 5; i++){

    if(i == 4){
        console.log("me salte el 4");
        continue;
    }

    document.write(i + "<br>")
}

document.write("<h5>ciclos for negativo</h5>")
for (let i = 6; i >= 0; i--){
    if(i == 2){
        document.write("se termino"+"<br>");
        break;
    }
    document.write(i + "<br>")
}

document.write("<h5>ciclos for in</h5>")
let animales = ["gato", "perro", "pajaro"];
animales.edad = 20;
// for in sirve para mostrar la posicion de los objetos
// dentro de un array
// sin embargo podemos traer el objeto que esta adentro "for of"
// como animales[animal]
// tambien trae las propiedades de una variable
for (animal in animales){
    document.write(animal + "<br>");
}
// for of sirve para mostrar lo que hay dentro del array
// de objetos, no para mostrar el indice del objeto como
// en el for in
document.write("<h5>ciclos for of</h5>")
for (animal of animales){
    document.write(animal + "<br>");
}
document.write("<br>")
array1 = ["ethan","juan","eliot"];
array2 = ["manuel", "meiby", array1, "bruno"];


forFamilia:
for (array in array2){
    if(array == 2){
        for(let array of array1){            
            document.write(array + "<br>");
            break forFamilia;            
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

