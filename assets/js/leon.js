import Animal from "./animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    return `<audio src="../assets/sounds/Rugido.mp3"></audio>`
  }
}
export default Leon;
