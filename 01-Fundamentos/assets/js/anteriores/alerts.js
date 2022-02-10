
//inicialización do nome
let nome = '';
//controlar que non deixe baleiro o nome
while (nome === '')
    {
        nome = prompt('cal é o teu nome?', '');
    }

document.write('<br>Boas, ', nome);
document.write('<br>Ancho: ', window.outerWidth);
document.write('<br>Alto: ', window.outerHeight);
