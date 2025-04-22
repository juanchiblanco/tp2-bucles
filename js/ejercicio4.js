// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

    let i;
    let suma=0;
do {
  i = prompt("Ingrese un numero (Cancelar para salir)");

  if (i === null || isNaN(i) ) {
    alert("Fin del programa. La suma total es: " + suma);
    break;
  }

  const numero = parseInt(i);

  if (!isNaN(numero)) {
        suma += numero;
  }
  
}while (true)
