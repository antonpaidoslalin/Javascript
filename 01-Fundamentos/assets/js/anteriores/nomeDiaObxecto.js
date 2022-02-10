let hoxe=new Date();
let dia= hoxe.getDay();
// let dia=6;
let nomeDia = {
    0:'Domingo',
    1:'Luns',
    2:'Martes',
    3:'Mércores',
    4:'Xoves',
    5:'Venres',
    6: 'Sábado',
}
console.log ('Hoxe é: ', nomeDia[dia]);
/* document.write('<br>Hoxe é: ');
document.write(nomeDia[dia]) */