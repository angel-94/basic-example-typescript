/**
 * Destructuración de un objeto
 * */

// Create OBJ
let avengers = {
    nombre: 'Cap',
    poder: 'Drog',
};

// Destructuring assignment
// let {nombre, poder} = avengers;
// nombre = 'CAMBIAMOS EL NOMBRE';

avengers.nombre = 'tony stark';
let {nombre, poder} = avengers;


console.debug(nombre);
console.debug(poder);


let xmen = ['uno', 'dos', 'tres'];
let [var1, var2, var3] = xmen;

console.debug(`${var1} -- ${var2} -- ${var3}`);