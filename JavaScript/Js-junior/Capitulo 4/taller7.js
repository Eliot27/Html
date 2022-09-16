const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["Zambrano", "pedro", "maria", "carlos", "daniel"],
    programacion: ["Gomez", "pedro", "juan", "maria", "carlos", "daniel", "manuel"],
    algebra: ["Dominguez", "pedro", "juan", "carlos", "manuel"],
    quimica: ["Valdez", "pedro", "juan", "maria", "carlos"],
  };

  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);
  if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0].slice(1);
    document.write(`El profesor de <i><mark>${informacion[1]}:</mark></i> <b>${profesor}</b><br><br>
    Los alumnos son <b>${alumnos}</b><br><br>`);
  }
};

const cantidadDeCLases = (alumno) => {
  let informacion = obtenerInformacion();
  let cantidad = 0;
  let clasesPresentes = [];
  for (info in informacion) {      
    if (informacion[info].includes(alumno)) {
      cantidad++;
      clasesPresentes.push(" "+info);
    }
  }    
  return document.write(
    `El alumno <mark><b>${alumno}</b></mark> esta en <b>${cantidad}</b> materias
    \n Esta cursando las materias: <b>${clasesPresentes}</b><br><br>`
  );
};

 let materiax = prompt("Ingrese la materia que desea ver \nfisica \nprogramacion \nalgebra \nquimica");
 mostrarInformacion(materiax);
 let alumnox = prompt("Ingrese el nombre del alumno que desea ver");
 cantidadDeCLases(alumnox);
