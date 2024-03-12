import Animal from "./animal.js";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar() {
    return console.log("chillar");
  }
}
export default Aguila;
