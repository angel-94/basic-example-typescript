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


let avenger = {
    nombre: 'Hulk',
    aplasta() {
        setTimeout(
            function () {
                console.debug(`${this.nombre} aplastaaaaa!!!`)
            }, 100
        )
    }
};

avenger.aplasta();




let avenger2 = {
    nombre: 'Hulk',
    hola: true,
    aplasta() {
        setTimeout(
            () => console.debug(`${this.nombre} aplastaaaaa!!!`), 100
        )
    }
};

class Hola {
    uno: boolean = true;

    constructor(uno: boolean = false) {
        this.uno = uno
    }
}

avenger2.aplasta();