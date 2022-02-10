//semilla de número aleatorio
semilla=255;
/*pasar número aleatorio a natural: 
1.Multiplicar por un natural 
2.Redondear para evitar decimais.*/
b=Math.random()*255;    //Multiplicación
b=Math.round(b);        //Redondeo
a=Math.random()*255;    //Multiplicación
a=Math.round(a);        //Redondeo
//Función Resta
resta=()=>b-a;
//Visualización de resultado con especificación de factores
console.log('Resultado da resta de ', b, ' e ', a , ': ', resta());