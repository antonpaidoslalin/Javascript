
const blackjack = (()=> {
    'use strict'
    let deck=[];

    let difComputadora = 21;
    let difXogador = 21;
    let puntosXogadores=[0,0];
        

    let pau;
    let figura;
    let paus=['C','H','D','S'];
    let figuras=['J','Q','K','A'];
    let deter = false;
    let deterComp = false;
    let perderPuntoA = false;
    let ganharPuntoA = false;
    let xac = false;
    let imgCarta;
    let dado;


    //outras variables
    let faz;

    //Referencias do HTML

    const btnNovo = document.querySelector ("#btnNovo");
    const btnPedir = document.querySelector("#btnPedir");
    const btnDeter = document.querySelector("#btnDeter");
    const Puntaxes = document.querySelectorAll('small');

    const locXogaCartas = document.querySelector('#jugador-cartas');
    const locCompCartas = document.querySelector('#computadora-cartas');
    const c1 = document.querySelector("#c1");
    const j1 = document.querySelector("#j1");

    //Quen gaña?

    // refactorizar para ter unha soa función con 3 casos: Perder, Ganhar, Empate
    const Perder = () => {
    setTimeout(() => {
        alert('Perdiches!'); 
    }, 300);

    };
    const Ganhar = () => {
        setTimeout(() => {
            alert('Gañaches!');   
        }, 300);

    };
    const Empate = () => {
        setTimeout( () => {
            alert('Empate!');
        }), 300;

    };
    
    /*refactorizar para ter unha soa función de desactivar, con 2 casos: Pedir, Deter (pasando mensaxes)*/
    const desactivarBtnPedir = () => {
        btnPedir.disabled=true;
    };
    const desactivarBtnDeter = () => {
        btnDeter.disabled=true;
    }
    //Fin refactorizacíon desactivar botóns
    /***Refactorizacións reaccionEstado  (mensaxeEstado) 
     * MENSAXES:
     * maior: inferior a puntaxe obxectivo
     * igual: igual a puntaxe obxectivo
     * menor: menor a puntaxe obxectivo
     * 
     *const reaccionEstado = (mensaxeEstado) => {
        switch(mensaxeEstado){
            case menor: xogoMenor();
            case igual: xogoIgual();
            case maior: xogoMaior();
        };
     };
     
      const xogoMenor = () => {

      }:

      const xogoIgual = () = {

      };

      const xogoMaior = () = {

      };

          ***/
    const xogMais21 = () => {
                deterComp=true;
                desactivarBtnDeter();
                desactivarBtnPedir();
                decidirGanhador();
    };
    const xogMenosIgual21 = () => {
        if (puntosXogadores[0] === 21){
                if (!xac){
                alert ('Xogada Automática Computador: para empatar ou perder');
                xac=true;
                }
                xogoComputadora ();
                decidirGanhador();
        }
        
    }
    //fin Refactorización reaccionEstado 
    const decidirGanhador = () => {
    desactivarBtnDeter();
    desactivarBtnPedir();
    deter=true;
    deterComp=true;
        
        if (puntosXogadores[1] > 21){
                if (!ganharPuntoA){
                    Ganhar(); 
                }
                ganharPuntoA=true;
            } else {
                if (puntosXogadores[0]> 21){
                    if (!perderPuntoA){
                        Perder(); 
                    }
                    perderPuntoA=true;
                    deterComp=true;
                    deter=true;
                } else {
                    if (puntosXogadores[1] === 21){
                        if (PuntosXogadores[0]=== puntosXogadores[1]){
                            console.log('Entramos a Empate'); Empate();
                        }else{
                            Perder(); 
                        }
                    } else {
                        if (puntosXogadores[0]=== 21){
                            if (puntosXogadores[0]=== puntosXogadores[1]){
                                Empate();
                            }else{
                                Ganhar();
                            }

                        } else {
                            if (puntosXogadores[0]> puntosXogadores[1]){
                                Ganhar(); console.log ('Ganhar Punto C')
                            }else{
                                Perder();
                            }
                        }
                    }
                }
            }
        };
   
    const xogoComputadora=()=>{
        if ( (puntosXogadores[1] < 21) && (!deterComp)) {
            let carta = pedirCarta();
            puntosXogadores[1] = puntosXogadores[1] + valorCarta(carta);
            imgCarta = document.createElement('img');
            imgCarta.src=`assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            locCompCartas.append(imgCarta);
            Puntaxes[1].innerText= puntosXogadores[1]; 
            procesarDiferencias();
        }
            if(puntosXogadores[1] > 21){
                xogMais21();
            } else{
                xogMenosIgual21();
            };
            if ((puntosXogadores[1] === 21) && (puntosXogadores[0]=== 21)){
                decidirGanhador();
            }
        
            
        
    };
   
    const xogoXogador=()=>{
            //XogoXogador  
            let carta = pedirCarta();
            puntosXogadores[0]= puntosXogadores[0]+ valorCarta(carta);
            imgCarta = document.createElement('img');
            imgCarta.src=`assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');

            locXogaCartas.append(imgCarta);
            Puntaxes[0].innerText= puntosXogadores[0]; 
            //Punto de control. Comentar en produción
            console.log(puntosXogadores[0]);
            //Cada xogo do xogador, dispara o xogo da computadora
            //Pendente
            procesarDiferencias();
            if (puntosXogadores[0]> 21){
                desactivarBtnPedir();
                desactivarBtnDeter();
                decidirGanhador()
            }

        };                                                                  

    //Reiniciar Xogo
    const reiniciarXogo=()=>{
        puntosXogadores[0]= 0;
        puntosXogadores[1] = 0;
        difXogador = 21;
        difComputadora = 21;
        deter = false;
        deterComp = false;
        perderPuntoA = false;
        xac = false;
        crearDeck();
        document.location.reload(true);
        //refactorizar: borrar
    }

    //Crear Baralla
    const crearDeck=()=>{
        deck=[];
        for(let i=2; i<=10; i++){
            for (pau of paus ){
            deck.push(i+pau);
            }
        }; 


    for(figura of figuras){
        for (pau of paus ){
        deck.push(figura+pau);
        }
    }; 
    return deck;
    };
    if (deck = []){
        crearDeck();
    };

    // console.log(deck);
    deck=_.shuffle(deck);
    //Función para pedir carta
    const pedirCarta = () =>{
        if (deck.length === 0){
            throw 'Non hai cartas na baralla';
        }
        // let carta=deck.pop();
        let carta=deck.shift();
        return(carta);
    
    }
    /*Crear documentación dentro do programa, mediante comentarios*/

    //función para obter o valor dunha carta
    const valorCarta = ( carta ) => {
        let valor=0;
        faz=carta.substring(0,carta.length-1);
        console.log({faz});

        (figuras.includes(faz))?
        valor= (faz==='A')?11:10
        : 
        valor = parseInt(carta.substring(0,carta.length -1));

        return valor;
    }

    const deterComputadora = () => {
        deterComp = true;
        return deterComp;
    }

    const procesarDiferencias = () =>{
        difComputadora = 21 - puntosXogadores[1];
        difXogador = 21 - puntosXogadores[0];
    }
    /***************** EVENTOS **************** 
     *                                        *
     *                                        *
     *                                        *
     *                                        *
     *                                        *   
     *                                        *   
    *******************************************/

    // btnPedir.addEventListener('mouseover', () =>{
        // console.log('ratoEnriba!');
    // });

    btnDeter.addEventListener('click', () => {
        //console.log('Deter: Pendente de facer');
        desactivarBtnDeter();
        desactivarBtnPedir();
        deter = "true";
        if (!deterComp){
            finxogoComputadora();
        }
        decidirGanhador();
    })

    btnPedir.addEventListener('click',() => {
        if ((puntosXogadores[0]< 21) && (puntosXogadores[1] < 21)){
            xogoXogador();
            if ((!deterComp)) {
                dado=6*Math.random(); 
                if (puntosXogadores[1]<21){
                    if((difComputadora >= 11) || (dado > 1)) {
                    xogoComputadora();
                    }
                }
            }
            
        }
        if ((puntosXogadores[0]> 21) || puntosXogadores[1] === 21){
            deter = true;
            deterComputadora();
            desactivarPedir();
            desactivarBtnDeter();
            if (puntosXogadores[1] === 21){
                alert ('Xogada Automática: para empatar ou perder');
                xogoXogador ();

            }
            decidirGanhador();
        }

        if(puntosXogadores[0]===21){
            desactivarPedir();
            desactivarBtnDeter();
            deter = true;
            xogoComputadora();
            decidirGanhador();
        };
    });

    
    btnNovo.addEventListener('click', () => {
        reiniciarXogo();
    });

    const finxogoComputadora = () => {
        console.clear();
        desactivarBtnPedir();
        desactivarBtnDeter();
        do {
        xogoComputadora();
        }while ((deter) && (!deterComp) && (puntosXogador>=puntosXogadores[1]) && (!xac));
    };
   return{
    novoXogo : reiniciarXogo
 };
})();