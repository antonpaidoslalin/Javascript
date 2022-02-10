/*Suma de elementos de vector*/
//variables
//variable vect (tipo vector)
vect = [35, 62, 3, 50, 35, 15, 56];
//variable res (para resultado, tipo acumulador)
res = 0;
/*Bucle for. i comeza en 0, sigue mentras sexa menor co número de elementos,
e incrementa a variable da condición en 1 de cada vez */
for (i=0; i< vect.length; i++ ){
res = res + vect[i];
console.log('Suma de elementos do vector ata o elemento número ', i, '(', vect[i], ')  = ', res);
}
//mostrar resultado
console.log('Suma de elementos do vector = ', res);
