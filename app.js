// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array de amigos
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Evitar duplicados
  const existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("Ese nombre ya fue agregado.");
    input.value = "";
    return;
  }

  amigos.push(nombre);

  // Mostrar lista
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });

  input.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
