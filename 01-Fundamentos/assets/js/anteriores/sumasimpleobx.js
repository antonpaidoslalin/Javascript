const factors =  {
    facta:0,
    factb:0
};

/* VALORES ALEATORIOS DE FACTORES/SUMANDOS */
factors.facta=Math.round(Math.random()*1000);
factors.factb=Math.round(Math.random()*1000);

suma = () =>factors.facta + factors.factb;
console.log('A suma de: ', factors.facta, ' e ', factors.factb, ' é : ', suma() );