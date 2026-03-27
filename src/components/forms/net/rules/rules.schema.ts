import * as yup from 'yup';

export enum NetRulesField {
  RULES = 'rules',
}
export const NetRulesSchema = yup.object().shape({
  [NetRulesField.RULES]: yup.string().max(2048),
});

export interface NetRulesFormValues {
  [NetRulesField.RULES]: string;
}
