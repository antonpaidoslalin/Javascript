function menorVect(vector){
    n=vector[0];
    for(i=1; i<vector.length; i++){
      if (vector[i]<n){
          n = vector[i];
      }  
      //console.log ('n = ', n)
    }
    return n;
};
vectNumeros=[15,25,12,2,158,99,-132,0,55,98,182,-5,-3,-33];
res=menorVect(vectNumeros);
console.log(res);
console.log('O menor dos números é ', res);
//facer este exercicio facendo importación da función menor de menor.js (proxecto propio)