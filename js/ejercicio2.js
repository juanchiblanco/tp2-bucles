const nota = parseInt(prompt(`Ingrese la nota que obtuvo en el examen`))

if(nota>=0 & nota<=2){document.writeln(`Muy deficiente`)}
else if(nota>=3 & nota<=4){document.writeln(`Insuficiente`)}
else if(nota>=5 & nota<=6){document.writeln(`Suficiente`)}
else if(nota===7){document.writeln(`Bien`)}
else if(nota>=8 & nota<=9){document.writeln(`Notable`)}
else if(nota===10){document.writeln(`Sobresaliente`)}
else if(nota>10){document.writeln(`Número erróneo`)}
else{document.writeln(`Introduce un número válido`)}