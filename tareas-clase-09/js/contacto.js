const form = document.querySelector("#form-contacto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#nombre");
  const correo = document.querySelector("#email");
  const mensaje = document.querySelector("#mensaje");

  const data = {
    nombre: nombre.value,
    correo: correo.value,
    mensaje: mensaje.value,
  };

  console.log("Datos para el email:", data);
});
