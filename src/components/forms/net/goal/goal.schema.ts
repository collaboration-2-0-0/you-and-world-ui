import * as yup from 'yup';

export enum NetGoalField {
  GOAL = 'goal',
}
export const NetGoalSchema = yup.object().shape({
  [NetGoalField.GOAL]: yup.string().min(0).max(1024, 'Можна не більше 1024 символів'),
});

export interface NetGoalFormValues {
  [NetGoalField.GOAL]: string;
}
