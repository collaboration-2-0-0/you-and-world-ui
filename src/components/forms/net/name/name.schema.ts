import * as yup from 'yup';

export enum NetNameField {
  NAME = 'name',
}
export const NetNameSchema = yup.object().shape({
  [NetNameField.NAME]: yup.string().max(255).required(),
});

export interface NetNameFormValues {
  [NetNameField.NAME]: string;
}
