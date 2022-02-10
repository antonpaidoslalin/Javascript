//Como función tradicional
function sumaRest (...args){
    let resultado=0;
    for (i=0; i<args.length;i++){
        resultado = resultado+args[i];
    }
    return (resultado);

}
let s5=sumaRest(1,2,3,4,5);
let s3=sumaRest(1,2,3);
console.log('s3= ',s3);
console.log('s5= ',s5);
//frecha
let resultado=0;
const sumaRestFrecha =(...args)=>{
    for (i=0; i<args.length;i++){
        resultado = resultado+args[i];
};
return resultado;
}
//...
let s7=0;
let s9=0;
s7=sumaRestFrecha(1,2,3,4,5,6,7);
s9=sumaRestFrecha(1,2,3,4,5,6,7,8,9);
console.log('s7= ',s7);
console.log('s9= ',s9);