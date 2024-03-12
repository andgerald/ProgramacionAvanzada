class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }

  get Nombre() {
    return this.nombre;
  }
  get Edad() {
    return this.edad;
  }
  get Img() {
    return this.img;
  }
  get Comentarios() {
    this.comentarios;
  }
  set Comentarios(newComentario) {
    this.comentarios = newComentario;
  }
  get Sonido() {
    return this.sonido;
  }
}

export default Animal;
