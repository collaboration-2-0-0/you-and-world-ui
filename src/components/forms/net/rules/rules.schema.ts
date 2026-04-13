import * as yup from 'yup';

export enum NetRulesField {
  RULES = 'rules',
}
export const NetRulesSchema = yup.object().shape({
  [NetRulesField.RULES]: yup.string().max(2048, 'Можна не більше 2048 символів'),
});

export interface NetRulesFormValues {
  [NetRulesField.RULES]: string;
}
