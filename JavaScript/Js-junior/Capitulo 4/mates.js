const res = (resultado)=>{
    document.write(resultado + "<br><br>");
}
// raiz cuadrada
number = Math.sqrt(25);
res("el numero de la raiz de 25 es = " + number);

// raiz cubica
number = Math.cbrt(27);
res("el numero de la raiz cubica de 27 es = " + number);

// El numero maximo
numero = Math.max(1,2,3,4,5,27,6,7,8,9,10);
res("el numero maximo es = " + numero);

// El numero minimo
numero = Math.min(1,2,-16,3,4,5,27,6,7,8,9,10);
res("el numero minimo es = " + numero);

// El numero aleatorio
numero = Math.random();
res("el numero aleatorio es = " + numero);

// El numero aleatorio entre dos numeros
numero = Math.random()*100;
numero = Math.round(numero);
res("el numero aleatorio entre 0 y 100 es = " + numero);

// El numero redondeado entre dos numeros
numero = Math.round(Math.random()*100);
res("el numero redondeado entre 0 y 100 es = " + numero);

// El numero fround
numero = 9.78956999599854;
res("el numero original es = " + numero);
numero = Math.fround(numero);
res("el numero fround es = " + numero);

// El numero truncado
numero = 9.2;
res("el numero original es = " + numero);
numero = Math.trunc(numero);
res("el numero truncado es = " + numero);

// El numero pi
numero = Math.PI;
res("el numero pi es = " + numero);

// La raiz cuadrada de un medio
numero = Math.SQRT1_2;
res("la raiz cuadrada de un medio es = " + numero);

// La raiz cuadrada de dos
numero = Math.SQRT2;
res("la raiz cuadrada de dos es = " + numero);

// El numero e
numero = Math.E;
res("el numero de euler es = " + numero);

// el logaritmo natural de dos
numero = Math.LN2;
res("el logaritmo natural de dos es = " + numero);

// el logaritmo natural de 10
numero = Math.LN10;
res("el logaritmo natural de 10 es = " + numero);

// el logaritmo de euler con base 2
numero = Math.LOG2E;
res("el logaritmo de euler con base 2 es = " + numero);

// el logaritmo de euler con base 10
numero = Math.LOG10E;
res("el logaritmo de euler con base 10 es = " + numero);


