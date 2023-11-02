//Usando javaScript, implementar una función que dado un número entero,
// retorno otro número formado por sus mismos dígitos ordenados descendentemente

const assert = require("assert");
const { func } = require("prop-types");

function descenOrder(num) {
  const numStr = num.toString();
  const numArr = numStr.split("").sort((a, b) => b - a);

  return parseInt(numArr.join(""), 10);
}

function testDescentOrder() {
  assert(descenOrder(1234) === 4321);
  assert(descenOrder(1) === 1);
  assert(descenOrder(0) === 0);

  console.log('Test passed!');
}

testDescentOrder();

// Utilizando JavaScript. implementar un ´metodo que permita acceder de forma segura 
//a propiedades de un objeto, incluso cuando dichas propiedades no existen.

//La función debe admitir tres parametros: el objeto al que se va a acceder;
//el valor por defecto que va a devolver la función en caso de que la propiedad
//no exista dentro del objeto; y por último, un string indicando el path de 
//la propiedad a consultar,

//El path delimitará el camino en el cual se encuentra la propiedad a consultar.
//Los distintos niveles de profundidad se delimitaran con puntos.
//Además este último parametro es opcional. En caso de no proveerse, 
//la función devolvera otra función que esperará ser invocada con el 
//path de la propiedad como argumento
//

const assert = require("assert");

function safeGet( obj, defaulValue, path) {
    if ( typeof path === 'undefined') {
        return (path) => safeGet(obj, defaulValue, path)
    } 

    const keys = path.split( '.');
    let current = obj;

    for (const key of keys) {
        if( current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return defaulValue
        }
    }

    return current;
}
function testSafeget() {
    const obj = {
        a: {
            b:{
                c: 10,
                d: null,
                e: false,
            },
        },
        f: 0,
    };

    assert(safeGet(obj, 'default', 'a.b.c') === 10, ' Test 1 failed') 
    assert(safeGet(obj, 'default', 'a.b.c') === false, ' Test 2 failed') 
    assert(safeGet(obj, 'default', 'a.b.c') === 0, ' Test 3 failed') 
    console.log( 'Al test passed');
}

testSafeget();