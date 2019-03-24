// TODO funciones flecha - ES6
/**
 * Ventajas de la función flecha
 * - Código minimalista
 * - 1. Mantener nuestro código lo mas legible
 * - 2. Contexto de THIS en diferentes scopes
 * */
var fNormal = function functionNormal(par) {
    return par;
};
var fFlecha = function (parametro) { return parametro; };
console.debug("Funcion --> " + fNormal('Normal'));
console.debug("Funcion --> " + fFlecha('Flecha'));
function exampleNormalFunction(name) {
    if (name === 'Angel')
        return name;
    return 'No es mi nombre';
}
var validate = function (name) {
    if (name === 'Angel')
        return name + " es mi nombre";
    return 'No es mi nombre';
};
console.debug("Funcion --> " + exampleNormalFunction('PEDRO'));
console.debug("Funcion --> " + validate('Angel'));
var avenger = {
    nombre: 'Hulk',
    aplasta: function () {
        setTimeout(function () {
            console.debug(this.nombre + " aplastaaaaa!!!");
        }, 100);
    }
};
avenger.aplasta();
var avenger2 = {
    nombre: 'Hulk',
    aplasta: function () {
        var _this = this;
        setTimeout(function () { return console.debug(_this.nombre + " aplastaaaaa!!!"); }, 100);
    }
};
avenger2.aplasta();
