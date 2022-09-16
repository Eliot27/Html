let materias = {
  fisica: ["Zambrano", "pedro", "maria", "carlos", "daniel"],
  programacion: [
    "Gomez",
    "pedro",
    "juan",
    "maria",
    "carlos",
    "daniel",
    "manuel",
  ],
  algebra: ["Dominguez", "pedro", "juan", "carlos", "manuel"],
  quimica: ["Valdez", "pedro", "juan", "maria", "carlos"],
};

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  
  if (personas.length >= 21) {
    document.write(`<b>No hay cupos</b>`);
  } else {
    personas.push(alumno);
    if (materia == "fisica") {
      materias = {
        fisica: personas,
        programacion: materias["programacion"],
        algebra: materias["algebra"],
        quimica: materias["quimica"],
      };
    } else if (materia == "fisica") {
      materias = {
        fisica: materias["fisica"],
        programacion: personas,
        algebra: materias["algebra"],
        quimica: materias["quimica"],
      };
    } else if (materia == "algebra") {
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        algebra: personas,
        quimica: materias["quimica"],
      };
    } else if (materia == "quimica") {
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        algebra: materias["algebra"],
        quimica: personas,
      };
    }
    document.write(`<i><b>${alumno}</b></i> se ha inscrito en la materia de <mark><b>${materia}</b></mark>`);
  }
};

document.write(`El grupo de programacion es: <b>${materias["programacion"]}</b> <br><br>`);
inscribir("Ethan", "programacion");
document.write(`<br><br>El grupo de programacion es: <b>${materias["programacion"]}</b>`);