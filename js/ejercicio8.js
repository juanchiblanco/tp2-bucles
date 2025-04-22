const numero = parseInt(prompt(`Ingrese un numero entre 1 y 50`))
if(numero<1 || numero>50 || isNaN(numero)){alert(`numero invalido`)}

if(numero>=1 && numero<=50){
    for(let i=1; i<=numero;i++)
        {
            for(let caracteres=1;caracteres<=i;caracteres++)
            document.writeln(caracteres)
            document.writeln(`<br>`)
        }
}
