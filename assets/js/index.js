import Animal from "./animal.js ";
import Leon from "./leon.js";

let animalExists;
let src;
const selectImage = document.getElementById("preview");
selectImage.addEventListener("change", () => {});

// select que trae el valor del animal hago el llamado al json para comprobar de que existe
const selecAnimal = document.getElementById("animal");
selecAnimal.addEventListener("change", async () => {
  const url = "../animales.json";
  const response = await fetch(url);
  const datos = await response.json();
  const animales = datos.animales;
  const animalValue = selecAnimal.value;
  animalExists = animales.find((animal) => animal.name === animalValue);
  const path = animalExists.imagen;
  src = `../assets/imgs/${path}`;
  selectImage.innerHTML = `
     <img  style="width:  180px" src=${src} alt='León' /> `;
});

// select que trae el valor de la edad
const selecEdad = document.getElementById("edad");
selecEdad.addEventListener("change", () => {
  selecEdad.value;
});

// textare que trae el valor de los comentarios
const comentarios = document.getElementById("comentarios");
comentarios.addEventListener("change", () => {
  comentarios.value;
});

const registrar = document.getElementById("btnRegistrar");
registrar.addEventListener("click", async () => {
  const preview = document.getElementById("Animales");

  preview.innerHTML += `
  <img  style="width:  180px" src=${src} alt='León' /> `;
  const leonsito = new Leon(
    selecAnimal.value,
    selecEdad.value,
    selectImage.value,
    comentarios.value
  );
});
