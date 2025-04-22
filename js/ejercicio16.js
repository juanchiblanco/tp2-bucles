let frase = prompt("Ingrese una frase")
let reverse = ""

if (frase.length >= 1){
    for(let letras = frase.length-1; letras>=0; letras--)
        {
            if (
                frase.charAt(letras) === "a" ||
                frase.charAt(letras) === "e" ||
                frase.charAt(letras) === "i" ||
                frase.charAt(letras) === "o" ||
                frase.charAt(letras) === "u" ||
                frase.charAt(letras) === "b" ||
                frase.charAt(letras) === "c" ||
                frase.charAt(letras) === "d" ||
                frase.charAt(letras) === "e" ||
                frase.charAt(letras) === "f" ||
                frase.charAt(letras) === "g" ||
                frase.charAt(letras) === "h" ||
                frase.charAt(letras) === "j" ||
                frase.charAt(letras) === "k" ||
                frase.charAt(letras) === "l" ||
                frase.charAt(letras) === "m" ||
                frase.charAt(letras) === "n" ||
                frase.charAt(letras) === "ñ" ||
                frase.charAt(letras) === "p" ||
                frase.charAt(letras) === "q" ||
                frase.charAt(letras) === "r" ||
                frase.charAt(letras) === "s" ||
                frase.charAt(letras) === "t" ||
                frase.charAt(letras) === "v" ||
                frase.charAt(letras) === "w" ||
                frase.charAt(letras) === "x" ||
                frase.charAt(letras) === "y" ||
                frase.charAt(letras) === "z" ||
                frase.charAt(letras) === " "
              ) {
                reverse += frase.charAt(letras);
                
        }
    }
    document.writeln(reverse)
    }