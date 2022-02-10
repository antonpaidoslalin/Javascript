class Entregable{
    // Atributos - Propiedades   
        titulo;
        genero;
        entregado=false;
       
    //Construtor
        constructor(titulo,  genero, entregado ){
            this.titulo=titulo;
            this.genero=genero;
            this.entregado=entregado;
        }
    //Setters
        set setTitulo(titulo){
            this.titulo=titulo;
        }
        set setGenero(genero){
            this.genero=genero;
        }
        set setEntregado(entregado){
            this.entregado=entregado;
        }
        
    //Getters
        get getTitulo(){
            return `El titulo es ${this.titulo}`;
        }
        get getGenero(){
            return  `El genero es ${this.genero}`;
        }
        get getEntregado(){
            return `El entregado es ${this.entregado}`;
        }

    
    //Métodos
        entregar(){
            this.setEntregado= true;
        }
        
        devolver(){
            this.setEntregado=false;
            
        }
        isEntregado(){
            return this.entregado;
        }
    imprimirEntregable(){
        console.log(`${this.getTitulo} \n${this.getGenero}\n${this.getEntregado}`);
            
        }
            
    
    }
    

    //Subclases

    //Subclase Serie
    class  Serie extends Entregable{
        
        #numeroDeTemporadas;
        creador;
    
        constructor(titulo, genero, entregado,  numeroDeTemporadas, creador){
            super(titulo,  genero, entregado);
            this.#numeroDeTemporadas=numeroDeTemporadas;
            this.creador=creador;
        }
        //setters
        set setnumeroDeTemporadas(numeroDeTemporadas){
            this.#numeroDeTemporadas=numeroDeTemporadas;
        }
        set setCreador(creador){
            this.creador=creador;
        }

        //Getters

        get getNumerodeTemporadas(){
            return  `Número de temporadas:${this.#numeroDeTemporadas} `
        }
        get getCreador(){
            return `El creador es: ${this.creador}`
        }
        imprimirSerie(){
            super.imprimirEntregable();
           /* c  = this.getCreador();
            tm = this.getNumerodeTemporadas();*/
            console.log(`Creador:                   ${this.getCreador}
                        \nNúmero de Temporadas:     ${this.getNumerodeTemporadas}`);
        }
        
    }
       
//Subclase Videojuego
    class Videojuego extends Entregable{
        horasEstimadas;
        companhia;
    
        constructor(titulo,horasEstimadas, entregado, genero, companhia ){
            super(titulo, entregado, genero);
            this.horasEstimadas=horasEstimadas;
            this.companhia=companhia;
        }
    
       
        set setHorasEstimadas(horasEstimadas){
            this.horasEstimadas=horasEstimadas;
        }
        set setCompanhia(companhia){
            this.companhia=companhia;
        }
    
        
        get getHorasEstimadas(){
            return `La horas estimadas es ${this.horasEstimadas}`;
        }
        get getCompanhia(){
            return `La compañía es ${this.companhia}`;
        }
    
        imprimirVideoJuego(){
            super.imprimirEntregable();
            console.log(`Horas estimadas para acabarlo: ${this.horasEstimadas}
                       \nCompañía desarrolladora:       ${this.getCompanhia}`);
        }
                                                 
        }
        //definir series y videojuegos
        s01 = new Serie ('Ada, la primera programadora', 'Histórico', false, 2, 'Mj73');
        v01 = new Videojuego ('Programming the world', 'Educativo', false , 300, 'f4 games');
        //imprimir series y videojuegos
        s01.imprimirSerie();
        v01.imprimirVideoJuego();
        s01.entregar();
        s01.imprimirSerie();
        v01.entregar();
        v01.imprimirVideoJuego();
        v01.devolver();
        v01.imprimirVideoJuego();
        s01.devolver();
        s01.imprimirSerie();