
class celulares {
    constructor(color, peso, ppp, mpx, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = ppp;
        this.resolucionDeCamara = mpx;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    botonEncendido () {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado zZzZ...");
            this.encendido = false;
        }
    }

    reiniciar (){
        if (this.encendido == true) {
            alert("Reiniciando el celular");            
        } else {
            alert("celular apagado zZzZ...");
        }
    }

    fotos(){
        alert(`foto tomada con mepapixeles de: ${this.resolucionDeCamara} `);
    }

    grabarvideo(){
        alert(`video grabado con mepapixeles de: ${this.resolucionDeCamara} `);
    }

    mostrarInfo(){
        return `Color: <b>${this.color}</b><br>
                Peso: <b>${this.peso}</b><br>
                Tamaño: <b>${this.resolucionDePantalla}</b><br>
                Mpx: <b>${this.resolucionDeCamara}</b><br>
                Mpx video: <b>${this.resolucionDeCamara}</b><br>
                Memoria Ram: <b>${this.memoriaRam}</b><br>`;
    }
}

class altaGama extends celulares {
    constructor(color, peso, ppp, mpx, ram, mpxfrontal) {
        super(color, peso, ppp, mpx, ram);
        this.frontal = mpxfrontal;    
    }
    videoLento(){
        alert("grabando a 270 fps");
    }
    facial(){
        alert("Reconociendo tu rostro...");
        alert("Exito!");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Camara Frontal: ${this.frontal}`;
    }

}

celular1 = new celulares("azul", "20gr","7 pulgadas", "Full HD", "4GB");
celular2 = new celulares("negro", "0gr","5 pulgadas", "HD", "2GB");
celular3 = new celulares("blanco", "10gr","4 pulgadas", "HQ", "1GB");
celularAlta1 = new altaGama("azul", "20gr","7 pulgadas", "8K", "20GB", "hd");
celularAlta2 = new altaGama("mate", "20gr","15 pulgadas", "4K", "10GB", "full hd");
// celular1.botonEncendido();
// celular1.fotos();
// celular1.grabarvideo();
// celular1.reiniciar();
// celular1.botonEncendido();

document.write(`
<h5>Celular 1</h5>
${celular1.mostrarInfo()} <br>
<h5>Celular 2</h5>
${celular2.mostrarInfo()} <br>
<h5>Celular 3</h5>
${celular3.mostrarInfo()} <br>
<h5>Celular 4</h5>
${celularAlta1.infoAltaGama()} <br>
<h5>Celular 5</h5>
${celularAlta2.infoAltaGama()} <br>
`);

