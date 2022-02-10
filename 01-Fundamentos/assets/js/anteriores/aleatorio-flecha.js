semilla=1000;
aleatorio=() => (Math.random()) * semilla;
let a = aleatorio();
a = Math.round(a);
console.log('Número do sorteo: ', a);