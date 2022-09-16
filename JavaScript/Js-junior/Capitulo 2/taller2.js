let cantidad = prompt("¿cuantos alumnnos son?");
var alumnnosTotales = [];
var dias = 10;
var inasistencias = dias * 0.10;

for (let i = 0; i < cantidad; i++) {
    alumnnosTotales[i] = [prompt("Nombre del alumno numero " + (i+1)),0];
}

const asistencia = (nombre, pos)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnnosTotales[pos][1]++;             
    } 
}

for (let i = 0; i < dias; i++) {
    for (alumno in alumnnosTotales) {
        asistencia(alumnnosTotales[alumno][0],alumno);        
    }
}

for(alumno in alumnnosTotales){
    let resultado = `${alumnnosTotales[alumno][0]}:<br>
                Presentes: ${alumnnosTotales[alumno][1]} <br>
                Ausencias: ${dias - alumnnosTotales[alumno][1]}`;
    if(dias - alumnnosTotales[alumno][1] > inasistencias){
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS </b><br><br>";    
    } else {
        resultado += "<br><br>"
    }
     document.write(resultado);
}


