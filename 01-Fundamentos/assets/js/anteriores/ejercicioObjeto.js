let persona = {
    nombre:'',
    apellidos:'',
    edad:0,
    peso:0,
    altura:0
    };
//petición de datos
while (persona.nombre === '') 
{
    persona['nombre']=prompt('Nome: ', '');
 };
while(persona.apellidos === '')
{
    persona.apellidos = prompt('Apelidos: ', '');
};
while(persona.edad === 0){
    persona.edad = prompt('Idade: ', 0);
};
while(persona.peso === 0){
    persona.peso = prompt('Peso (Kg.): ', 0);
};
while(persona.altura === 0){
    persona.altura = prompt('Altura (cm.): ', 0);
};



//Visualización de datos

document.write('<br>Nome: ',persona.nombre);
document.write('<br>Apelidos: ',persona.apellidos);
document.write('<br>Idade: ',persona.edad, ' anos');
document.write('<br>Peso): ',persona.peso, ' Kg.');
document.write('<br>Altura: ',persona.altura,' cm. (', persona.altura/100 , ' m.)' );