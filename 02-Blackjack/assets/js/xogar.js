const xogoComputadora=()=>{
    if ( (puntosXogadores[1] < 21) && (!deterComp)) {
        let carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        imgCarta = document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        locCompCartas.append(imgCarta);
        PuntosXogadores[1].innerText= puntosComputadora; 
        procesarDiferencias();
    }
        if(puntosComputadora > 21){
            xogMais21();
        } else{
            xogMenosIgual21();
        };
        if ((puntosComputadora === 21) && (puntosXogadores[0]=== 21)){
            decidirGanhador();
        }
    
        
    
};
/*Refactorizar */
const xogoXogador=()=>{
        //XogoXogador  
        let carta = pedirCarta();
        puntosXogadores[0]= puntosXogadores[0]+ valorCarta(carta);
        imgCarta = document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        locXogaCartas.append(imgCarta);
        PuntosXogadores[0].innerText= puntosXogador; 
        //Punto de control. Comentar en produción
        console.log(puntosXogador);
        //Cada xogo do xogador, dispara o xogo da computadora
        //Pendente
        procesarDiferencias();
        if (puntosXogadores[0]> 21){
            desactivarBtnPedir();
            desactivarBtnDeter();
            //PC120
            console.log('PC120');
            //FinPC120
            decidirGanhador()
        }

    };