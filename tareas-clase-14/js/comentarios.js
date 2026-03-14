function agregarComentario() {
  if (inputComentario.value == "") {
    // console.log("Escribir algo");
    mensaje.textContent = "Escribir algo";
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputComentario.value;

  const button = document.createElement("button");
  button.textContent = "Eliminar";
  button.addEventListener("click", () => {
    listaComentarios.removeChild(li);

    mensaje.textContent = "Comentario eliminado";

    setTimeout(() => {
      mensaje.textContent = "";
    }, 2000);
  });

  li.appendChild(button);

  listaComentarios.appendChild(li);

  mensaje.textContent = "Comentario agregado";

  inputComentario.value = "";

  setTimeout(() => {
    mensaje.textContent = "";
  }, 2000);
}

const btnAgregar = document.querySelector("#btnAgregar");
const inputComentario = document.querySelector("#comentario");
const listaComentarios = document.querySelector("#lista-comentarios");
const mensaje = document.querySelector("#mensaje");

inputComentario.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    agregarComentario();
  }
});

btnAgregar.addEventListener("click", () => {
  agregarComentario();
});
