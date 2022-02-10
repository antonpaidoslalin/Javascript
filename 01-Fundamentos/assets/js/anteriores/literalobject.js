/* function waitingKeypress() 
{
    return new Promise((resolve) => {
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e){
            if (e.keycode === 13){
                document.removeEventListener('keydown', onKeyHandler);
                resolve();
            }
        }
    })
} */
let personaje = {
    nombre: 'Tony Stark',
    codename: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
                zip: '10880 , 90265',
                ubicacion: 'Malibu, California',
    }

};
let props = {
    a: 1,
    b: 2,
};
console.log (personaje);
console.log('Nome: ',personaje.nombre);
console.log('Idade:', personaje.edad);
console.log('Coords: ',personaje.coords);
console.log('Coords(latitude) :', personaje.coords.lat);
console.log('Coords(lonxitude):', personaje.coords.lng);
console.log('Waiting until you press enter... ');
/*await waitingKeypress();*/

console.clear();
console.log('Nome: ',personaje['nombre']);
console.log('Nome: ',personaje['edad']);
console.log('Coords(latitude) :', personaje.coords['lat']);
console.log('Coords(lonxitude):', personaje.coords['lng']);
console.log('Número de traxes: ',personaje.trajes.length);
console.log('Número de letras da posición 2: ', personaje.trajes[2].length);
console.log('Último traxe: ', personaje.trajes[personaje.trajes.length - 1]);