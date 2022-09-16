const result = document.createElement('div');
result.innerHTML = 'Hola Infierno de Javascript';
document.body.appendChild(result);

// existen variables const var y let
// let es una variable que se puede reasignar
// const es una variable que no se puede reasignar
// var es una variable que se puede reasignar globalmente
// las variables pueden ser boolean, number, string, array, object, function, undefined y null

var saludo= 'Hola soy un var';
document.write(saludo + '<br>');
let saludo2= 'Hola soy un let';
document.write(saludo2 + '<br>');
const saludo3= 'Hola soy un const';
document.write(saludo3 + '<br>');

var saludo = true;
if (saludo) {
    document.write('ahora soy var en boleano ' + saludo + '<br>');
    document.write('y soy un tipo de dato ' + typeof saludo + '<br>');
}
saludo = 10;
if (saludo === 10) {
    document.write('ahora soy var en Entero '+ saludo + '<br>');
    document.write('y soy un tipo de dato ' + typeof saludo + '<br>');
}

let algo, otro, otro2;

if (algo === undefined) {
    document.write('algo es undefined' + '<br>');
    document.write('y soy un tipo de dato ' + typeof algo + '<br>');
}

otro = 'para comentar se usa "//" o tambien "/* */" sobre una linea de codigo';
document.write(otro + '<br>');

let a = 5, 
    b = 2,
    c = 0,
    resultado = 0;

resultado = a+b;
document.write('El resultado de la suma es ' + resultado + '<br>');
resultado = a-b;
document.write('El resultado de la resta es ' + resultado + '<br>');
resultado = a*b;
document.write('El resultado de la multiplicacion es ' + resultado + '<br>');
resultado = a/b;
document.write('El resultado de la division es ' + resultado + '<br>');
resultado = a%b;
document.write('El resultado de la modulo es ' + resultado + '<br>');
resultado = a**b;
document.write('El resultado de la potencia es ' + resultado + '<br>');
resultado = a++;
document.write('El resultado de la incremento es ' + resultado + '<br>');
resultado = a--;
document.write('El resultado de la decremento es ' + resultado + '<br>');
resultado = a+=b;
document.write('El resultado es a = a + b, respuesta: ' + resultado + '<br>');
resultado = a-=b;
document.write('El resultado es a = a - b, respuesta:  ' + resultado + '<br>');
resultado = a*=b;
document.write('El resultado es a = a * b, respuesta:  ' + resultado + '<br>');
resultado = a/=b;
document.write('El resultado es a = a / b, respuesta:  ' + resultado + '<br>');
resultado = a%=b;
document.write('El resultado es a = a % b, respuesta:  ' + resultado + '<br>');
resultado = a**=b;
document.write('El resultado es a = a ** b, respuesta:  ' + resultado + '<br>');
resultado = a++;
document.write('El resultado es a = a + 1, respuesta:  ' + resultado + '<br>');
resultado = a--;
document.write('El resultado es a = a - 1, respuesta:  ' + resultado + '<br>');
resultado = ++b;
document.write('++b primero modifica el valor incrementando y luego lo expone, respuesta:  ' + resultado + '<br>');
resultado = --b;
document.write('--b primero modifica el valor decrementando y luego lo expone, respuesta:  ' + resultado + '<br>');
resultado = b++;
document.write('b++ primero expone el valor y luego lo incrementa, respuesta:  ' + resultado + '<br>');
resultado = b--;
document.write('b-- primero expone el valor y luego lo decrementa, respuesta:  ' + resultado + '<br>');

let Nombre = "Eliot";
let Apellido = "Gomez";
let Saludo = `Esta pagina fue echa por: ${Nombre} ${Apellido}`;

document.write(Saludo + '<br>');



