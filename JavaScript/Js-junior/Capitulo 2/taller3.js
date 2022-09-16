const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("¿Qué operacion deseas realizar?")
let operacion = prompt("1: Suma 2: Resta 3: Division 4: Multiplicacion");

if(operacion == 1){
    let numero1 = prompt("Primer numero de sumar");
    let numero2 = prompt("Segundo numero de sumar");
    res = sumar(numero1,numero2);
    alert(`El resultado de la operacion es: ${res}`);
}
else if(operacion == 2){
    let numero1 = prompt("Primer numero de restar");
    let numero2 = prompt("Segundo numero de restar");
    res = restar(numero1,numero2);
    alert(`El resultado de la operacion es: ${res}`);
}
else if(operacion == 3){
    let numero1 = prompt("Primer numero de dividir");
    let numero2 = prompt("Segundo numero de dividir");
    res = dividir(numero1,numero2);
    alert(`El resultado de la operacion es: ${res}`);
}
else if(operacion == 4){
    let numero1 = prompt("Primer numero de multiplicar");
    let numero2 = prompt("Segundo numero de multiplicar");
    res = multiplicar(numero1,numero2);
    alert(`El resultado de la operacion es: ${res}`);
}
else {
    alert("No elegiste una opcion valida");
}
