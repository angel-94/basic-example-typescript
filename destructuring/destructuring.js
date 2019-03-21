/**
 * Destructuración de un objeto
 * */
// Create OBJ
var avengers = {
    nombre: 'Cap',
    poder: 'Drog'
};
// Destructuring assignment
// let {nombre, poder} = avengers;
// nombre = 'CAMBIAMOS EL NOMBRE';
avengers.nombre = 'tony stark';
var nombre = avengers.nombre, poder = avengers.poder;
console.debug(nombre);
console.debug(poder);
var xmen = ['uno', 'dos', 'tres'];
var var1 = xmen[0], var2 = xmen[1], var3 = xmen[2];
console.debug(var1 + " -- " + var2 + " -- " + var3);
