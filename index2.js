class SerVivo {
    constructor(nombre) {
       this.nombre = nombre;
    }

    caminar(nombre) {
        console.log('ahora esta caminando: ' + nombre);
    }
}

class Persona extends SerVivo {
    constructor(nombre) {
        super(nombre);
    }
    moverse() {
        super.caminar(this.nombre);
    }
}


obj = new Persona('juanito');
console.log(obj.moverse('juanito'));