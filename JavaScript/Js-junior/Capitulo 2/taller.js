
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?")
    if(edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("La entrada es gratis");
            free = true;
        } else {
            alert(`Son las ${time}, La entrada te cuesta 5 pesos`);
        }
    } else {
        alert("Prohibido la entrada a menores de edad")
    }
}

validarCliente(5);
