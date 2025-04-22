let frase = prompt("Ingrese una frase")
if(frase !==null && isNaN(frase))
    {let resultado = ""
        for (let i = 0; i < frase.length; i++)
            {
                resultado += frase[i] + "-"
            }
            document.writeln(resultado);
    }