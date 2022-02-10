//visualizar os números impares que hai entre os dous números dun vector binario.
//Variables
let arr_extremos=[];
let arr_res=[];

arr_extremos[0]=+prompt('Escribe un número: ', 5);
do{
    arr_extremos[1]=+prompt('Escribe un número: ',15);
}while(arr_extremos[0] >= arr_extremos[1]);
for (i=arr_extremos[0]; i <= arr_extremos[1]; i++){
    if(i%2===1){
        arr_res.push(i);
        console.log('i= ', i);
    }
    else{
        console.log('i é par ( ', i, ').')
    };
};
console.log(arr_res);