import Animal from "./animal.js";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Grunir() {
    return console.log("gruñir");
  }
}
export default Oso;
