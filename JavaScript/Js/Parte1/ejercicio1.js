const res = (resultado)=>{
    document.write(resultado + "<br>");
}

var esperado;
var operacion;

esperado = 4.5;
operacion = 1.5+1.5*2;

res(esperado);
res(operacion);

esperado = 16;
operacion = (10%6)**2;

res(esperado);
res(operacion);

esperado = NaN;
operacion = 200+0/0;

res(esperado);
res(operacion);

let a = 3;
let b = 5;
let c = 'resultado';
const YEAR = '2021';

esperado = 'resultado';
operacion = console.log('resultado');

res(esperado);
res(operacion);

esperado = 8;
operacion = (c = a + b);

res(esperado);
res(operacion);

esperado = NaN;
operacion = console.log(++c);

res(esperado);
res(operacion);

esperado = NaN;
operacion = (c+=a);

res(esperado);
res(operacion);

esperado = 510;
operacion = (resultadox = b + '10');

res(esperado);
res(operacion);

esperado = '3JS';
operacion = console.log(a+'JS');;

res(esperado);
res(operacion);




