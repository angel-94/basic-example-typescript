// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};


interface Hero {
    nombre: string;
    artesMarciales: string[]
}

// Cree una interfaz que sirva para validar el siguiente objeto
let batman: Hero = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};


// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a: number, b: number) {
    return (a + b) * 2
}

let multiplica = (a: number, b: number) => {
    return (a + b) * 2
};

console.debug('F-NORMAL resultadoDoble -> ', resultadoDoble(1, 2));
console.debug('f flecha suma (a + b) * 2 -> ', multiplica(2, 2));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre: string, poder: string, arma: string) {
    if (poder)
        return nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    return nombre + " tiene un " + poder
}

function getAvengerSolution(nombre: string, poder?: string, arma = 'arco') {
    if (poder)
        return nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    return nombre + " tiene un " + poder
}


console.debug('getAvenger --> ',  getAvenger('SUPER MAN', 'VUELA', 'PU˜NOS'));
console.debug('getAvengerSolution1 -->', getAvengerSolution('SUPER MAN 2', 'VUELA 2', 'PU˜NOS 2'));
console.debug('getAvengerSolution2 -->',getAvengerSolution('SUPER MAN', 'VUELA COMO OPCIONAL'));
console.debug('getAvengerSolution3 -->',getAvengerSolution('SUPER MAN'));


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

}

let figura: Rectangulo = new Rectangulo(2, 2);
console.debug(`El área de ${figura.base} * ${figura.altura} es  ${figura.area()}`);