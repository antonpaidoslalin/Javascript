function potencia (base,exponente){
    /*XERACIÓN DE VARIABLE RESULTADO******************
     A variable inicialízase a 1, por ser o elemento neutro
     da multiplicación, ao ser a potencia, multiplicacións repetidas,
     base elevada a 0 = 1, e todo se multiplica por un 1 inicial*/
    let r = 1;          //r, variable resultado
    /**BUCLE PARA FACER AS MULTIPLICACIÓNS REPETIDAS *
     * Desde o índice igual a 0 (as estruturas de datos comezan la posición 0 *
     * ata o expoñente sen incluír -ao comezar en 0, acaba na posición        *
     * (exponente - 1)- .
     * Imos incrementando o expoñente i++*/ 
    for (i= 0; i < exponente; i++){     
        r = r * base;
    }
    return r;
}
//Cambio: Pedir datos por prompt
//let bas = 2;
//Pedimos a base da potencia.
bas=+prompt('Dame a base da potencia: ',2);
//let exp = 15;
//Pedimos o expoñente da potencia.
exp=+prompt('Dame o expoñente da potencia: ',6);
let p = potencia(bas,exp);
console.log(bas, ' elevado a ', exp, ' = ', p);