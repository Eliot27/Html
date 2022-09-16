//clases y como funcionan
// todos lo contrucctores tienen variables
// -- que pueden ser asignadas segun lo que yo quiera
// -- pero dentro del constructor su codigo
// -- todos los "this.obj" (donde obj es el objeto de programacion orientada a objetos)
// -- deben ser iguales a las variables asignadas en el contrucctor
// -- las variables en el contrucctor son las que reciben los datos
// -- y estos datos son transformado en objetos
class Animal {
    constructor(nombre,especie,edad,color){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Mi nombre es ${this.nombre}, 
        Soy ${this.especie},
        tengo ${this.edad} años
         y soy color de color <b>${this.color}</b>`; 
    }
    //Metodos .  .  .
    // los metodos son basicamente funciones
    // pero dentro de una clase se denominan metodos.
    // a diferencia de las funciones flecha ()=>
    // estas funciones deben ser escritas
    // como las funciones tradicionales (legacy)
    verInfo(){
        document.write(this.info + "<br>");
    }
    //polimorfismo basico
    ladrarcondicion(){
        if(this.especie == "perro"){
            document.write("!Waw! <br>");
        } else {
            document.write("No puede ladrar, ya que es un " + this.especie + "<br");
        }
    }
}

//herencia
class Perro extends Animal {
    constructor(nombre, especie, edad, color, raza){
        super(nombre, especie,edad,color);
        this.raza = raza;
        this.pata = null;
    }
    ladrar(){
        alert("Wawrr");
    }
    //metodos estaticos
    // son usados principalmente
    // para ser llamados fuera de la clase
    static correr(){
        alert("El perro corre hacia ti");
    }
    //metodo set
    // asigna cosas a las objetos
    set setModificarPata(newName){
        this.pata = newName;
    }
    //metodo get
    // obtener informacion
    get getPata(){
        return this.pata;
    }

}

const perrox = new Perro("bruno","perro","10", "negro", "7 razas");
const gato = new Animal("bella","gato","3", "mona");
const pajaro = new Animal("codorniz","codorniz","2", "cafe");

//document.write(perro.info + "<br>" + gato.info + "<br>" + pajaro.info + "<br>");

//perro.verInfo();
//perrox.ladrarcondicion();
//perrox.ladrar();
//Perro.correr();
//perrito.modificarPata(perrito.pata)
perrox.setModificarPata = "4 patas";
document.write(perrox.getPata);