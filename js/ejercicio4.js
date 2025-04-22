    let i;
    let suma=0;
do {
  i = prompt("Ingrese un numero (Cancelar para salir)");

  if (i === null || isNaN(i) ) {
    alert("Fin del programa. La suma total es: " + suma)
  }

  const numero = parseInt(i);

  if (!isNaN(numero)) {
        suma += numero;
  }
  
}while (true)