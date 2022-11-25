import * as yup from 'yup';

export const createAccountSchema = yup.object().shape({
  firstname: yup.string().max(70, "Votre prénom ne doit pas excéder 70 caractères.").required("Veuillez remplir ce champ."),
  lastname: yup.string().max(70, "Votre prénom ne doit pas excéder 70 caractères.").required("Veuillez remplir ce champ."),
  email: yup.string().email("Le format est incorrect.").required("Veuillez remplir ce champ"),
  password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{8,30}$/, "Le mot de passe doit contenir entre 8 et 30 caractères, dont 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial (!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)").required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Les mots de passe doivent être identiques").required("Veuillez remplir ce champ.")
})