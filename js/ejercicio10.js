const filas = parseInt(prompt(`Ingresa un numero de filas`))
const columnas = parseInt(prompt(`Ingresa un numero de columnas`))
let valorCelda = filas * columnas

document.writeln(`<table>
           <tbody>`)
for(let indiceFilas = 1; indiceFilas<=filas; indiceFilas++){
    document.writeln(`<tr>`)
    for(let indiceColumnas = 0; indiceColumnas<columnas; indiceColumnas++){
        
    document.writeln(`<td>${valorCelda}</td>`)
    valorCelda--
    }
    document.writeln(`</tr>`)
            }
document.writeln(`
           </tbody>
        </table>`)