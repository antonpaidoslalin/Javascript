let salarios = {
    'Xohán':1500,
    'Ana': 2400,
    'Xosé':1800,
};

// function maxSalary(salariosEmpresa){
//    maximo = 0;
//    let maxNombre=null;
//    for (let nombrePropiedad in salariosEmpresa){
//     if (salariosEmpresa[nombrePropiedad]>maximo){
//         maximo = salariosEmpresa[nombrePropiedad];    
//         maxNombre = nombrePropiedad;
//     }
//    }
//    return maxNombre;
// };
   
// console.log('Quen ten o máximo salario é:', maxSalary(salarios), '=> maxSalary');
console.log(salarios);
 function salarioMaximo(salariosEmpresa){
     let salarArr = Object.entries(salariosEmpresa);
     console.log(salarArr);
     maximo = 0;
     maxNombre=null;
     for (const persona of salarArr){
         if (persona[1]>maximo){
          //   console.log(persona[0],' , ', persona[1]);
             maximo=persona[1];
             maxNombre=persona[0];
         }
        // console.log(maximo);
         console.log
    return (maxNombre);
     }
 };
 console.log('O máximo salario é o de: ', salarioMaximo(salarios), '=> salarioMaximo');

