let frase = prompt("Ingrese una frase")
let vocales = ""

if (frase.length >= 1){
for(let letras = 0; letras<=frase.length; letras++)
    {
        if (
            frase.charAt(letras) === "a" ||
            frase.charAt(letras) === "e" ||
            frase.charAt(letras) === "i" ||
            frase.charAt(letras) === "o" ||
            frase.charAt(letras) === "u"
          ) {
            vocales += frase.charAt(letras);
    }
}
}
let cantidadVocales = vocales.length
console.log(cantidadVocales)

document.writeln(`La cantidad de vocales que ingreso son: ${cantidadVocales}. Las vocales que ingreso son: ${vocales}`)