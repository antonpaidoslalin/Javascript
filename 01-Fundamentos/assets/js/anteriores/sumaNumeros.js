let suma=0; // Variable acumuladora para a suma
let numeros = [25, 33.5 , 109.5, 152, 85, 92, 3]; //vector que contén os elementos numéricos
numeros.forEach ((elemento,indice,arr) => { // Bucle para percorre-lo vector
    suma += elemento; //suma a variable de acumulación suma e o elemento que se percorre, e asígnallo á variable suma
});
console.log('suma dos elementos: ', suma ); //Visualización do resultado de xeito informativo.
