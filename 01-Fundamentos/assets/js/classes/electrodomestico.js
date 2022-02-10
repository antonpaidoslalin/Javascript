class Electrodomestico {
    //Atributos - Propiedades
    precioBase;
    color;
    consumoEnergetico;
    peso;
    //Constructor
    constructor(precioBase, color, consumoEnergetico,peso){
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    //setters
    set cambiarPrecioBase (nuevoPrecioBase){
        this.precioBase = nuevoPrecioBase;
    }
    set cambiarColor (nuevoColor){
        this.color = nuevoColor;
    }
    set cambiarConsumo (nuevoConsumo){
        this.consumoEnergetico = nuevoConsumo;
    }

    //Getters (if necessary)

    //Métodos
    verPrecioBase(){
        console.log(`Prezo Base: ${this.precioBase} €`);
    }
    verColor(){
        console.log(`Color: ${this.color}`)
    }
    verConsumo(){
        console.log(`Consumo Enerxético: Categoría ${this.consumoEnergetico}`)
    }
    verPrecioFinal(){
        let prFinal = this.calcularPrecioFinal();
        console.log(`Prezo Final: ${prFinal} €`)
    }
    
    imprimir(){
        this.verPrecioBase();
        this.verColor();
        this.verConsumo();
        this.verPrecioFinal();
    }

    calcularPrecioFinal(){
        let pFinal = this.precioBase;
        switch (true){
            case (this.peso < 20) :
                pFinal += 10;
                break;
            case (this.peso < 50) :
                pFinal += 50;
                break;
            case (this.peso < 80) :
                pFinal += 80;
                break;
            case (this.peso >= 80) :
                pFinal += 100;
                break;
        }
    return pFinal;
    }
}
//Subclase Lavadora
class Lavadora extends Electrodomestico{
    carga;
    constructor(precioBase, color, consumoEnergetico, peso, carga){
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }
    set carga (nuevaCarga){
        this.carga = nuevaCarga;
    }
    verCabeceira(){
        console.log('\n===========LAVADORA==============\n');
        }
    verCarga(){
        console.log(`Carga: ${this.carga} Kg.`)
    }
    verPrecioFinal(){
        let preFinal = this.calcularPrecioFinal();
        console.log(`Prezo Final Lavadora: ${preFinal} € `);
    }
    calcularPrecioFinal(){
        let preFinal = super.calcularPrecioFinal();
        if (this.carga>30){
            preFinal = preFinal + 50;
        }
        return preFinal;
    }
    imprimir(){
        this.verCabeceira();
        super.imprimir();
        this.verCarga();
        this.verPrecioFinal();
    }
    
    
    
}

//Subclase Televisión
class Television extends Electrodomestico{
    resolucion="20";
    sintTDT=false;
    constructor(precioBase, color, consumoEnergetico, peso, resolucion, sintTDT){
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.sintTDT = sintTDT;
    }
    
    //setters
    set cambiarResolucion (nuevaResolucion){
        this.resolucion = nuevaResolucion;
    }
    set cambiarsintTDT (valorSintTDT){
        this.sintTDT = valorSintTDT;
    }

    //Getters (if necessary)

    //Métodos
    verCabeceira(){
    console.log('\n===========TELEVISOR==============\n');
    }

    verResolucion (){
        console.log(`Diagonal (polegadas): ${this.resolucion} \"`);
    }
    verSintTDT () {
        if (this.sintTDT){
            console.log ('TDT: si')
        } else
            console.log ('TDT: non');
        
    }
    verPrecioFinal(){
        let preFinal = this.calcularPrecioFinal();
        console.log (`Prezo Final TV: ${preFinal} €`);

    }
    calcularPrecioFinal(){
        let preFinal = super.calcularPrecioFinal();
        if (this.resolucion > 40){
            preFinal *= 1.30;
        }
        if (this.sintTDT){
            preFinal += 50;
        }
    return preFinal;
    }

    imprimir(){
        
        this.verCabeceira();
        super.imprimir();
        this.verResolucion();
        this.verSintTDT();
        this.verPrecioFinal();
    }

}

fagor333 = new Lavadora (400 , 'Branco', 'A', 22, 30.0000001);
td169 = new Television(315, 'Azul Eléctrico', 'E', 19, 41, false );
balay258 = new Lavadora (388, 'Branco', 'A', 25, 33);
lgtv865 = new Television(325, 'Azul Eléctrico', 'D', 19, 41, true);
EDList=[];
EDList.push (fagor333);
EDList.push (td169);
EDList.push (balay258);
EDList.push (lgtv865);
console.log(EDList);
let prezoTotalElec = 0;
for (let i=0; i < EDList.length; i++){
    prezoTotalElec+= EDList[i].calcularPrecioFinal();
}
console.log(`O Prezo Total dunha unidade de tódolos electrodomésticos é: ${prezoTotalElec}`);


//TODO: Evitar doble visualización de prezo final de cada especialización de electrodoméstico