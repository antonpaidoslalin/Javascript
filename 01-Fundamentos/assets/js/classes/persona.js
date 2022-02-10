class Persona{
    static _contador = 0;
    //Atributos - Propiedades
    nombre='';
    apellidos='';
    edad='';
    //Construtor
    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos ;
        this.edad = edad;
        Persona._contador++;
    }
    //Cambio de Atributos - Propiedades
    //Nome
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    //Apellidos
    set cambiarApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos;
    }
    //Edad
    set cambiarEdad (nuevaEdad){
        this.edad = nuevaEdad;
        this.edad = Number(nuevaEdad);
    }
    //Getter de Nombre Completo
    get nombreCompleto (){
        return this.nombre + ' ' + this.apellidos;
    }

    //Métodos
    //Imprimir
    imprimir(){
        console.log(`Nome Completo: ${this.nombreCompleto}`);
        console.log(`Idade: ${this.edad}`);
    }
   
};
//module.exports = Persona;