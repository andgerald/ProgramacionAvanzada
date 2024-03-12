const data = async () => {
  const url = "../animales.json";
  const response = await fetch(url);
  const datos = await response.json();
  console.log(datos);
  datos.animales.forEach((element) => {
    console.log(element.imagen);
  });
  return;
};

export default data;
