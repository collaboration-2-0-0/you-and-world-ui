import * as yup from 'yup';

export enum NetNameField {
  NAME = 'name',
}
export const NetNameSchema = yup.object().shape({
  [NetNameField.NAME]: yup
    .string()
    .min(2, 'Можна не менше 2 символів')
    .max(255, 'Можна не більше 255 символів')
    .required(),
});

export interface NetNameFormValues {
  [NetNameField.NAME]: string;
}
