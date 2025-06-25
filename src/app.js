const opcionesDeJuego = ['piedra', 'papel', 'tijera', 'lizard', 'spock'];

const pregunta = prompt("¡Elige una opción!: piedra, papel, tijera, lizard, spock").toLowerCase();

// Genera una opción aleatoria para el bot
const opcionAleatoria = () => {
  const index = Math.floor(Math.random() * opcionesDeJuego.length);
  return opcionesDeJuego[index];
};

const seleccionUsuario = pregunta;
const seleccionBot = opcionAleatoria();
// Indica que habeis seleccionado tu y el bot
console.log(`Seleccionaste: ${seleccionUsuario}`);
console.log(`El bot seleccionó: ${seleccionBot}`);

const juego = (usuario, bot) => {
  if (usuario === bot) {
    console.log("¡Es un empate!");
  } else if (
    (usuario === "piedra" && (bot === "tijera" || bot === "lizard")) ||
    (usuario === "papel" && (bot === "piedra" || bot === "spock")) ||
    (usuario === "tijera" && (bot === "papel" || bot === "lizard")) ||
    (usuario === "lizard" && (bot === "papel" || bot === "spock")) ||
    (usuario === "spock" && (bot === "tijera" || bot === "piedra"))
  ) {
    console.log("¡Ganaste!");
  } else {
    console.log("Has perdido, inténtalo de nuevo.");
  }
};

juego(seleccionUsuario, seleccionBot);