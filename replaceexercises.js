console.log("1.  Escriba un reemplazamiento que cambie todos las fracciones de números `num1/num2` a sus inversos `num2/num1`");
var text = "456.5/237e2 1/9.1 hola 2/5";
// Change this call.
var result = text.replace(/\b(\d+[.e]?\d*)\/(\d+[.e]?\d*)\b/g, '$2/$1');
console.log(result);
var expected = `237e2/456.5 9.1/1 hola 5/2`;
if (expected === result) console.log("OK")
else console.log("ERROR!");

console.log(`
2.  Se quiere poner un espacio en blanco después de la aparición de cada coma:
        > x = "a,b,c,1,2,d, e,f"
        'a,b,c,1,2,d, e,f'
        > x.replace(/,/g,", ")
        'a, b, c, 1, 2, d,  e, f'
    Se pide que si hay ya un espacio después de la coma, no se duplique.
`);


var text = "a,b,c,1,2,d, e,f";
var result = text.replace(/,([^ ])/g, ', $1');
console.log(result);
var expected = "a, b, c, 1, 2, d, e, f";
if (expected === result) console.log("OK")
else console.log("ERROR!");

console.log(`
3. Se pide una expresión regular que case con expresiones del tipo
"identifier = number" y retorne con cada paréntesis el identificador
y el número. Pruebe con "h     = 4", "  temp = 5.6", "  x23= -2.3e1"
"z += 3"
`);

var text ="   x23= -2.3e1";
var result = text.match(/\s*(\w+)\s*[\+\-\*\/]?=\s*([-+]?\d+(?:[.e]?\d*)*)\b/);
console.log(result);
if (result[1] == "x23"  && result[2] == "-2.3e1") console.log("OK");
else console.log("ERROR!");