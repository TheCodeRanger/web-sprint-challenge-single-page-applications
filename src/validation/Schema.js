import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(3, " Your name must be 3 characters or longer."),
  pizzaSize: yup
    .string()
    .oneOf(['personal', 'small', 'medium', 'large', 'huge', 'ridiculous'], "Enter a valid pizza size"),
  sauce: yup.boolean(),
  cheese: yup.boolean(),
  nineBullets: yup.boolean(),
  xtraCheese: yup.boolean(),
  gravel: yup.boolean(),
  brokenGlass: yup.boolean(),
  pepperoni: yup.boolean(),
  garlic: yup.boolean(),
  cat: yup.boolean(),
  feta: yup.boolean(),
  olives: yup.boolean(),
  handOfGod: yup.boolean(),
  text: yup.string()
});