function getComputerChoice() {
  const jugadas = ["piedra", "papel", "tijera"];
  const indiceAleatorio = Math.floor(Math.random() * jugadas.length);
  return jugadas[indiceAleatorio];
}
console.log(getComputerChoice);

const result = (playerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    return "Empate";
  } else if (playerChoice == "piedra" && computerChoice == "tijera") {
    return "Ganaste, piedra le gana a tijera";
  } else if (playerChoice == "piedra" && computerChoice == "papel") {
    return "Perdiste, papel le gana a piedra";
  } else if (playerChoice == "papel" && computerChoice == "piedra") {
    return "Ganaste, papel le gana a piedra";
  } else if (playerChoice == "papel" && computerChoice == "tijera") {
    return "Perdiste, tijera  le gana a papel";
  } else if (playerChoice == "tijera" && computerChoice == "papel") {
    return "Ganaste, tijera le gana a papel";
  } else if (playerChoice == "tijera" && computerChoice == "piedra") {
    return "Perdiste, piedra  le gana a tijera";
  }
};

function playGame() {
  let p1 = 0,
    cpu = 0;
  for (let i = 0; i < 5; i++) {
    jugador = prompt();
    jugada = result(jugador);
    if (jugada.includes("Ganaste")) {
      p1++;
    } else if (jugada.includes("Perdiste")) {
      cpu++;
    }
    console.log(jugada);
    //setTimeout(1000);
  }

  console.log("jugador ", p1, "cpu ", cpu);
  if (p1 > cpu) {
    console.log("Ganaste maestro!");
  } else if (cpu > p1) {
    console.log("CPU te ganó maquinola");
  } else console.log("EMPATE!");
}
