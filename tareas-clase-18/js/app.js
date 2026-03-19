const button = document.querySelector("#load");
const lista = document.querySelector("#lista");

import { getUsers } from "./api.js";
import { renderUsers } from "./dom.js";

button.addEventListener("click", async () => {
  try {
    lista.textContent = "Cargando...";

    const users = await getUsers();

    renderUsers(users, lista);
  } catch (error) {
    lista.textContent = error.message;
  }
});
