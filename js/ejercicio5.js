const dni = parseInt(prompt(`Ingrese su numero de DNI sin puntos (8 caracteres max.)`))
if(dni>99999999 || dni<0 || isNaN(dni)){alert(`Numero invalido`)}
const resto = dni % 23
const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
const letra = letras.charAt(resto);

alert(`DNI: ${dni} - Letra: ${letra}`);
