//Variables para el jugador y el pc
let jugador = prompt("Elige piedra, papel o tijera: ");
let opciones = ["piedra", "papel", "tijera"];
let pc = opciones[Math.floor(Math.random() * 3)]; //* Función para que sea aleatoria

jugarCachipun(jugador, pc);

//Texto que me indica la selección que hizo el pc
document.write("El pc eligió: " + pc + "<br>");


//Casos para cada opción
function jugarCachipun(jugador, pc) {
  jugador = jugador.toLowerCase();
  pc = pc.toLowerCase();

  if (jugador === pc) {
      alert("Nadie gana 🥱");
  } else if (jugador === "piedra") {
      if (pc === "papel") {
          alert("¡¡¡Perdiste!!! 🤡");
      } else { // Si el pc eligió tijera
          alert("¡Ganaste!🤑");
      }
  } else if (jugador === "papel") {
      if (pc === "tijera") {
          alert("¡¡¡Perdiste!!! 🤡");
      } else { // Si eligió piedra
          alert("¡Ganaste!🤑");
      }
  } else if (jugador === "tijera") {
      if (pc === "piedra") {
          alert("¡¡¡Perdiste!!! 🤡");
      } else { // Si eligió papel
          alert("¡Ganaste!🤑");
      }
  } else {
      alert("Opción invalida, debes elegir piedra, papel o tijera. 🙄"); // Esto es para cuando el usuarioe scribe algo que no sean las opciones ya escritas
  }
}


