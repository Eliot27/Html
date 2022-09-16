
class apps {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.open = false;
        this.install = false;
    }

    abrir() {
        if (this.open == false && this.install == true) {
            this.open = true;
            alert("app iniciada");
        }
    }

    cerrar() {
        if (this.open == true && this.install == true) {
            this.open = false;
            alert("app cerrada");
        }
    }

    instalar() {
        if (this.install == false) {
            this.install == true
            alert("app instalada");
        }
    }

    desinstalar() {
        if (this.install == true) {
            this.install == false
            alert("app desinstalada");
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

app1 = new apps("10K", "5 estrellas","90MB");
app2 = new apps("1K", "2 estrellas","9000MB");

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()}
`)



