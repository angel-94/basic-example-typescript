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
