import Animal from "./animal.js ";
import Leon from "./leon.js";
const selectImage = document.getElementById("preview");
selectImage.addEventListener("change", () => {});

// select que trae el valor del animal
const selecAnimal = document.getElementById("animal");
selecAnimal.addEventListener("change", () => {
  switch (selecAnimal.value) {
    case "Leon":
      selectImage.innerHTML = `
      <img  style="width:  180px" src='../assets/imgs/Leon.png' alt='León' /> `;
      break;
    case "Lobo":
      selectImage.innerHTML = `
      <img style="width:  180px" src='../assets/imgs/Lobo.jpg' alt='Lobo' /> `;
      break;
    case "Oso":
      selectImage.innerHTML = `
      <img style="width:  180px" src='../assets/imgs/Oso.jpg' alt='Oso' /> `;
      break;
    case "Serpiente":
      selectImage.innerHTML = `<img style="width:  180px" src='../assets/imgs/Serpiente.jpg' alt='Serpiente' /> `;
      break;
    case "Aguila":
      selectImage.innerHTML = `<img style="width:  180px" src='../assets/imgs/Aguila.png' alt='Aguila' /> `;
      break;
  }

  console.log(selecAnimal.value);
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
  const audio = document.getElementById("player");
  preview.innerHTML += `
    <img src='../assets/imgs/Lobo.jpg' />
    <img style="width: 30px" src='../assets/imgs/audio.svg' />

      `;
  console.log("first");
  const leonsito = new Leon(
    selecAnimal.value,
    selecEdad.value,
    selectImage.value,
    comentarios.value
  );

  console.log(leonsito.Rugir(), "SOY EL LEON");
});
