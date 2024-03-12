import Animal from "./animal.js";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Grunir() {
    return `<audio src="../assets/sounds/Grunido.mp3"></audio>`;
  }
}
export default Oso;
