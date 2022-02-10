let vectA = [10,22,12,5];
let vectB = [15,93,55];
let vectC = [22,88,12];
let vectR = [];
if ((vectA.length === vectB.length) && (vectB.length === vectC.length) ){
    for (i=0; i < vectA.length; i++){
        vectR[i] = vectA[i]+vectB[i]+vectC[i];
    }
    console.log(vectR);
 } else {
    //console.log ('Err: Os vectores son de lonxitude distinta')
    alert ('Err: Os vectores son de lonxitude distinta')
 }