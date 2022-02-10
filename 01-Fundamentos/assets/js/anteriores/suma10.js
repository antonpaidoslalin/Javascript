//Sumar números do 0 ao 10, con bucle "for"
min=0;
max=10;
let res=0;
for (let i= 0; i <= max; i++){
    res = res + i;
    if (i<10){
    //console.log('suma dende ', min, ' ata  ', i , ' = ', res);
    } 
}
console.log('Suma dende ', min, ' ata ', max, ' = ', res);