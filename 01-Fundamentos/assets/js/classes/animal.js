class Animal {
//Atributos - Propiedades
    nome = "descoñecido";
    especie = "descoñecida";
    raza = "descoñecida";
    sexo = "descoñecido";
    tamanho = "descoñecido";

//Construtor

    constructor (nome,especie,raza,sexo,tamanho){
        this.nome = nome;
        this.especie = especie.toUpperCase();
        this.raza = raza;
        this.sexo = sexo;
        this.tamanho = tamanho;
    }



//Setters

//Obxectivo: Cambiar Atributos - Propiedades

set cambiarNome (novoNome){
    this.nome = novoNome;
}
set cambiarEspecie (novaEspecie){
    this.especie = novaEspecie;
    this.especie = this.especie.toUpperCase();
}

set cambiarRaza (novaRaza) {
    this.raza = novaRaza;
}

set cambiarSexo (novoSexo) {
    this.sexo = novoSexo;
}

set cambiarTamanho (novoTamanho) {
    this.tamanho = novoTamanho;
}

//Getters (if necessary)

//Mostrar Atributos - Propiedades
// Nome
verNombre (){
    console.log(`O meu nome é ${this.nome}`);
}
//Especie
verEspecie (){
    console.log(`Son da Especie ${this.especie}`)
}
//Raza
verRaza (){
    console.log(`Son de Raza ${this.raza}`);
}
//Sexo
verSexo (){
    console.log(`E son ${this.sexo}`);
}
//Tamaño
verTamanho (){
    console.log(`De Tamaño ${this.tamanho}`);
}


//Tódolos datos
verAnimal (){
   
    this.verNombre();
    this.verEspecie();
    this.verRaza();
    this.verSexo();
    this.verTamanho();
    console.log(' \n\n');
}




}
// exportar
//export default Persona;


// Probas
Guillerme = new Animal('Guillerme','Gato', 'Común', 'Macho', 'Mediano');
Guillerme.verAnimal();
//Cambio con set
Guillerme.cambiarEspecie="Felis Catus";
Guillerme.cambiarRaza="Común Europeo";
Guillerme.verAnimal();