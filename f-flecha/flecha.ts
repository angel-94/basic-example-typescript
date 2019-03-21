// TODO funciones flecha - ES6
/**
 * Ventajas de la función flecha
 * - Código minimalista
 * - 1. Mantener nuestro código lo mas legible
 * - 2. Contexto de THIS en diferentes scopes
 * */
let fNormal = function functionNormal(par: string) {
    return par;
};


let fFlecha = parametro => parametro;


console.debug(`Funcion --> ${fNormal('Normal')}`);
console.debug(`Funcion --> ${fFlecha('Flecha')}`);



function exampleNormalFunction(name: string) {
    if (name === 'Angel')
        return name;
    return 'No es mi nombre';
}


let validate = (name: string) => {
    if (name === 'Angel')
        return `${name} es mi nombre`;
    return 'No es mi nombre';
};

console.debug(`Funcion --> ${exampleNormalFunction('PEDRO')}`);
console.debug(`Funcion --> ${validate('Angel')}`);
