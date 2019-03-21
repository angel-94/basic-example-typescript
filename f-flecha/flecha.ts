let fNormal = function functionNormal(par: string) {
    return par;
}

let fFlecha = parametro => parametro;

console.debug(`Funcion --> ${ fNormal('Normal') }`);
console.debug(`Funcion --> ${ fFlecha('Flecha') }`);