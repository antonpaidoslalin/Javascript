function menor(primeiro,segundo){
    if (primeiro < segundo){
        return primeiro;
    }else{
        return segundo;
    }
};
let pri=prompt('Dame un dos números: ',2);
let seg=prompt('Dame o outro número',32);
console.log('O menor dos números é', menor(pri,seg));