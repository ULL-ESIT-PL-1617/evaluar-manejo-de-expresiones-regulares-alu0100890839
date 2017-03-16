/*
For each of the following items, write a regular expression to test
whether any of the given substrings occur in a string. The regular
expression should match only strings containing one of the substrings
described. Do not worry about word boundaries unless explicitly
mentioned. When your expression works, see whether you can make it
any smaller.
1.  Escriba una expresión regular que reconozca las cadenas de doble
    comillas. Debe permitir la presencia de comillas y caracteres
    escapados. Pruebe con `'"hello \"world\" and ... "'` 
2. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo `-2.3e-1`, `-3e2`, `23`, `3.2`)
3. Escriba una expresión regular que case con los números no primos expresados en unario. Pruebe con `1111`, `111`, `111111`, `1111111`, ...
4. Escriba una expresión regular que case con los comentarios JavaScript. 
*/

var unwritten = 0;

// Fill in the regular expressions

// 1.  Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir la presencia de comillas y caracteres escapados. 
verify(/"(\\"|[^"])+"/,
       ["hello \"world\" and ... ", "fe\"y eso\""],
       ["lala", "lala"]);

// 2. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo `-2.3e-1`, `-3e2`, `23`, `3.2`). numbers = /^ ... $/, matching exacto
verify(/\d+([e\.]\d+)*/,
       ["3.4e2", "47.3"],
       ["34e2"]);


// 4. Escriba una expresión regular que case con los números no primos expresados en unario. Pruebe con `1111`, `111`, `111111`, `1111111`, ...
verify(/.../,
       ["...", "..."],
       ["...", "..."]);

// 5. Escriba una expresión regular que case con los comentarios JavaScript. 
verify(/(?:\/{2}.*\n?|\/\*.*\*\/)/,
       ["//hola", "/*lala\\ncomentario*/"],
       ["/frf", "/*fre\nffj"]);

if (unwritten) console.log("Quedan "+unwritten+" regexps sin escribir");

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  var error = 0;
  if (regexp.source == "...") {
   unwritten++; 
   return;
  }
  yes.forEach(function(s) {
    if (!regexp.test(s)) {
      console.log("Failure to match '" + s + "'");
      error++;
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s)) {
      console.log("Unexpected match for '" + s + "'");
      error++;
    }
  });
  if (error) console.log(`${error} error${error>1? 's' : ''}`);
}