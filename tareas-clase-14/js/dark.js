const btnCambiarTema = document.querySelector("#btnCambiarTema"); // Con esto obtengo el nodo que quiero

const tema = localStorage.getItem("tema");

if (tema == "dark") {
  document.body.classList.add("dark");
}

btnCambiarTema.addEventListener("click", () => {
  // Con esto añado un evento a ese nodo (botón)
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
});

// btnCambiarTema.addEventListener("click", () => {
//   console.log("click");
//   document.body.classList.add("dark");
//   console.log(document.body.classList.contains("dark"));
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("dark");
//   } else {
//     document.body.classList.add("dark");
//   }
//   if (document.body.classList.value == "dark-orange") {
//     document.body.classList.value = "";
//   }
// }); // Con esto añado un evento a ese nodo (botón)
