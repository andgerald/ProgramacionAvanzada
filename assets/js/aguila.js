import Animal from "./animal.js";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar() {
    return `<audio src="../assets/sounds/Chillido.mp3"></audio>`;
  }
}
export default Aguila;
