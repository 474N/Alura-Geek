export const typeError = [
  "valueMissing",
  "typeMismatch",
  "badInput",
  "tooShort",
  "stepMismatch",
  "rangeUnderflow"
];

export const messages = {
  name: {
    valueMissing: "El campo nombre no puede estar vacio.",
    tooShort: "El nombre tiene que ser al menos de 3 caracteres.",
  },
  price: {
    valueMissing: "El campo precio no puede esta vacio.",
    rangeUnderflow: "El precio no puede ser menor o igual 0.",
    badInput: "El precio solo debe contener numeros."
  },
  url_image: {
    valueMissing: "El campo URL no puede esta vacio.",
    patternMismatch: "Por favor ingrese una url valida, la imagen debe tener un formato valido. (jpg, png, webp o jpeg)",
  }
};