/* Variables
    hoy*/
const hoxe=new Date();
let dia=hoxe.getDay();
let nomeDia = {
    0:'Domingo',
    1:'Luns',
    2:'Martes',
    3:'Mércores',
    4:'Xoves',
    5:'Venres',
    6: 'Sábado',
}
console.log('Hoxe é ', nomeDia[dia]);
const horaActual = 10;
let horaApertura;
let mensaje;
(dia > 0 && dia <6)?(horaApertura=11):(horaApertura=9);
(horaActual>=horaApertura)? mensaje='Aberto, ': mensaje='Pechado, ';
console.log(mensaje, 'abrimos ás: ', horaApertura);