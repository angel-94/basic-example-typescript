let fNormal = function functionNormal(par: string) {
    return par;
}

let fFlecha = parametro => parametro;

console.debug(`Funcion --> ${ fNormal('Normal') }`);
console.debug(`Funcion --> ${ fFlecha('Flecha') }`);


function exampleNormalFunction(name: string) {
    if(name === 'Angel')
        return name;
    return 'No es mi nombre';
}

let validate = (name: string) => {   
    if(name === 'Angel')
        return `${name} es mi nombre`;
    return 'No es mi nombre';
}

console.debug(`Funcion --> ${ exampleNormalFunction('PEDRO') }`);
console.debug(`Funcion --> ${ validate('Angel') }`);