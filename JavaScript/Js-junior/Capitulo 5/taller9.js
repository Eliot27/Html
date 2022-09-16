const materias = {
  fisica: [90, 6, 4, "fisica"],
  quimica: [84, 8, 2, "quimica"],
  matematicas: [92, 8, 3, "matematicas"],
  ingles: [96, 8, 6, "ingles"],
  programacion: [91, 5, 9, "programacion"],
  historia: [86, 7, 7, "historia"],
  geografia: [70, 9, 3, "geografia"],
  filosofia: [50, 5, 9, "filosofia"],
  biologia: [60, 2, 1, "biologia"],
};

const corte = () => {
  for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {      
      console.log("%c   Asistencias en orden", "color: green");
    } else {        
        console.log("%c   Falta de asistencias", "color: red");
    }

    if (promedio >= 7) {
      console.log("%c   Promedio en orden", "color: green");
    } else {
      console.log("%c   Promedio desaprobado", "color: red");
    }

    if (trabajos >= 3) {
      console.log("%c   Trabajos en orden", "color: green");
    } else {
      console.log("%c   Faltan trabajos ", "color: red");
    }
  }
};

corte();
