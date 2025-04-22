const numero = parseInt(prompt(`Ingrese un numero entre 1 y 50`))
if(numero<1 || numero>50 || isNaN(numero)){alert(`numero invalido`)}

if(numero>=1){
    for(let i=numero; i>=1;i--){
        for(let caracteres=0;caracteres<i;caracteres++)
                    document.writeln(i)
                    document.writeln(`<br>`) 
    }
}
