import Persona from './persona.js';
class Programador extends Persona{
    linguaxePrincipal = 'Sen linguaxe principal';   
    constructor(){
        super(nombre,apellidos,edad);
    }
 
    imprimirProgramador(prog){
        console.log('Linguaxe Principal: ', prog.linguaxePrincipal);
    }
    mjml01=new Programador ("María José", "Mendoza Lamela", 46, "Javascript");
}

