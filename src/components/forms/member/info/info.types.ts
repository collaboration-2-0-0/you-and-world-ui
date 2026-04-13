import * as yup from 'yup';

export enum MemberInfoField {
  MEMBER_ID = 'member_id',
  MEMBER_DESIRE = 'member_desire',
  MEMBER_GOAL = 'member_goal',
  MEMBER_ACTIVITY = 'member_activity',
  MEMBER_ROLE = 'member_role',
}

export const MemberInfoSchema = yup.object().shape({
  [MemberInfoField.MEMBER_ID]: yup.number(),
  [MemberInfoField.MEMBER_DESIRE]: yup
    .string()
    .nullable()
    .min(0)
    .max(1024, 'Можна не більше 1024 символів'),
  [MemberInfoField.MEMBER_GOAL]: yup
    .string()
    .nullable()
    .min(0)
    .max(1024, 'Можна не більше 1024 символів'),
  [MemberInfoField.MEMBER_ACTIVITY]: yup
    .string()
    .nullable()
    .min(0)
    .max(1024, 'Можна не більше 1024 символів'),
  [MemberInfoField.MEMBER_ROLE]: yup
    .string()
    .nullable()
    .min(0)
    .max(255, 'Можна не більше 255 символів'),
});

export interface MemberInfoFormValues {
  [MemberInfoField.MEMBER_ID]?: number;
  [MemberInfoField.MEMBER_DESIRE]?: string | null;
  [MemberInfoField.MEMBER_GOAL]?: string | null;
  [MemberInfoField.MEMBER_ACTIVITY]?: string | null;
  [MemberInfoField.MEMBER_ROLE]?: string | null;
}
