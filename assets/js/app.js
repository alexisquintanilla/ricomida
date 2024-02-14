/*TOOLTIP*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  /*VARIABLES */
  let btnEnviarCorreo = $("#enviarCorreo");
  let btnAnadirFav = $("#anadirFav");
  let cambiarColorI = $("#ingredientes");
  let cambiarColorP = $("#preparacion");
  let h5 = $("h5");
  let ocultarTexto = $(".card-text");

  /*FUNCIONES */
  btnEnviarCorreo.click(function () {
    alert("El correo fue enviado correctamente...");
  });
  btnAnadirFav.click(function () {
    alert("Se ha añadido a favoritos!");
  });
  cambiarColorI.dblclick(function Ingredientes() {
    $(this).css("color", "red");
  });
  cambiarColorP.dblclick(function () {
    $(this).css("color", "red");
  });
  /*FUNCION GLOBAL*/
  h5.click(function () {
    ocultarTexto.toggle();
  });
});
