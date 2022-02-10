let potACalc=[[3,3],[2,5],[4,9]];
let resPot=[];
for (let i in potACalc){
    //console.log(potACalc[i]);
    res=1;
    for (j=0;j<potACalc[i][1];j++){
        //console.log('potACalc[',i,'][1]=',potACalc[i][1],'\n res=',res);
        res=res*potACalc[i][0]; 
        };
    resPot.push(res);
};
for (i=0 ; i<potACalc.length; i++){
    console.log(potACalc[i][0], ' elevado a ', potACalc[i][1], ' = ', resPot[i]);
}