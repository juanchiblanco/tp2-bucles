let frase = prompt("Ingrese una frase")
let vocal = ""

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
            vocal = frase.charAt(letras);break
    }
}
}
document.writeln(`La vocal "${vocal}" se encuentra en la posicion ${frase.indexOf(vocal)} `)