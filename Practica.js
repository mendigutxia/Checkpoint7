//-Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

function checkPoint7(arg1, arg2, arg3, arg4) {
  let multiplicando1 = arg1 + arg2 ;
  let multiplicando2 = arg3 + arg4 ;
  let resultado = multiplicando1 * multiplicando2
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!");
  } else if (resultado === 50){
    console.log("¡El número es igual a 50!");
  } else {
    console.log("¡El número es menor que 50!");
  }
  }

checkPoint7(1, 3, 5, 5 )
checkPoint7(2, 3, 5, 5 )
checkPoint7(3, 3, 5, 5 )