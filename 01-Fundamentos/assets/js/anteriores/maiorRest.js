function maiorRest(...args){
    n=args[0];
    for(i=1; i<args.length; i++){
      if (args[i]>n){
          n = args[i];
      }  
      //console.log ('n = ', n)
    }
    return n;
};
let mR = maiorRest(1,15,1048576,-8,982,15,625,9480,33,68);
console.log('O maior (mR) é : ', mR);

maiorRestFrecha=(...args) => {
    n=args[0];
    for(i=1; i<args.length; i++){
      if (args[i]>n){
          n = args[i];
      }  
      //console.log ('n = ', n)
    }
    return n;
}
mRf= maiorRestFrecha(1,15,1048576,-8,982000000,15,625,9480,33,68);
console.log('O maior (mRf) é : ', mRf);