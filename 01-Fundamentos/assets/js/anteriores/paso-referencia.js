let a =10;
let b =20;
let c = 40;
c=a;
a=70; 
console.log (
    'a: ', a,
    'b: ', b,
    'c:', c);
let d = {numero: 10};
let e = {numero: 30};
let f = d;
console.log (
    'd: ', d.numero,
    'e: ', e.numero,
    'f:', f.numero);
d.numero=200;
console.log (
    'd: ', d.numero,
    'e: ', e.numero,
    'f:', f.numero);