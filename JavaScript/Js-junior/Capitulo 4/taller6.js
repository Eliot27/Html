class Calculadora {
    constructor() {
    }
  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }

  multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }

  dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }
  potencia(num,exp){
      return num**exp;
  }
  raiz(num){
      return Math.sqrt(num);
  }
  raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operacion deseas realizar?");
let operacion = prompt("1: Suma \n2: Resta \n3: Division \n4: Multiplicacion  \n5: Potencia" );

if (operacion == 1) {
  let numero1 = prompt("Primer numero de sumar");
  let numero2 = prompt("Segundo numero de sumar");
  res = calculadora.sumar(numero1, numero2);
  alert(`El resultado de la operacion es: ${res}`);
} else if (operacion == 2) {
  let numero1 = prompt("Primer numero de restar");
  let numero2 = prompt("Segundo numero de restar");
  res = calculadora.restar(numero1, numero2);
  alert(`El resultado de la operacion es: ${res}`);
} else if (operacion == 3) {
  let numero1 = prompt("Primer numero de dividir");
  let numero2 = prompt("Segundo numero de dividir");
  res = calculadora.dividir(numero1, numero2);
  alert(`El resultado de la operacion es: ${res}`);
} else if (operacion == 4) {
  let numero1 = prompt("Primer numero de multiplicar");
  let numero2 = prompt("Segundo numero de multiplicar");
  res = calculadora.multiplicar(numero1, numero2);
  alert(`El resultado de la operacion es: ${res}`);
} else if (operacion == 5) {
    let numero = prompt("Numero a elevar");
    let exp = prompt("Exponente");
    res = calculadora.potencia(numero,exp);
    alert(`El resultado de la operacion es: ${res}`);
}   else if (operacion == 6) {
    let numero = prompt("Numero a elevar");
    res = calculadora.raiz(numero);
    alert(`El resultado de la operacion es: ${res}`);
}  else if (operacion == 7) {
    let numero = prompt("Numero a elevar");
    res = calculadora.raizCubica(numero);
    alert(`El resultado de la operacion es: ${res}`);
} else {
  alert("No elegiste una opcion valida");
}
