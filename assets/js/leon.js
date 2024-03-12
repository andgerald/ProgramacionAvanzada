import Animal from "./animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    return console.log("rugiiir");
  }
}
export default Leon;
