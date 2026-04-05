import { FC, useEffect, useRef } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { Member } from '@shared/client/services/member.service';
import { app } from '@components/app/app.provider';
import { modalService } from '@services/modal.service';
import { MdContentEdit } from '@components/controls/md-content-edit/md.content.edit';
import { MemberInfoField, MemberInfoFormValues, MemberInfoSchema } from './info.schema';
import { useStyles } from './info.styles';

const FormikProvider = Formik<MemberInfoFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError('FAIL');

const MemberInfo: FC<MemberInfoFormProps> = ({ member }) => {
  const { root } = useStyles();
  const { submitForm, values, errors } = useFormikContext<MemberInfoFormValues>();
  const { userNet } = app.getState();
  const editable = member.getMember().node_id === userNet?.node_id;
  const initValues = useRef<MemberInfoFormValues>(values);

  const handleSubmit = () => {
    for (const [key, value] of Object.entries(values)) {
      if (initValues.current[key as MemberInfoField] === value) {
        continue;
      }

      submitForm()
        .then(() => (initValues.current = values))
        .catch(() => null);

      return;
    }
  };

  useEffect(() => {
    const [error] = [...Object.values<string>(errors)];
    if (error) {
      modalService.showError(`${error}`);
    }
  }, [errors]);

  return (
    <div className={root}>
      <MdContentEdit
        name={MemberInfoField.MEMBER_DESIRE}
        onEditEnd={handleSubmit}
        editable={editable}
      />
      <MdContentEdit
        name={MemberInfoField.MEMBER_GOAL}
        onEditEnd={handleSubmit}
        editable={editable}
      />
      <MdContentEdit
        name={MemberInfoField.MEMBER_ACTIVITY}
        onEditEnd={handleSubmit}
        editable={editable}
      />
      <MdContentEdit
        name={MemberInfoField.MEMBER_ROLE}
        onEditEnd={handleSubmit}
        editable={editable}
      />
    </div>
  );
};

interface MemberInfoFormProps {
  member: Member;
}

export const MemberInfoForm: FC<MemberInfoFormProps> = ({ member }) => {
  const { info } = member.useState(['info']);

  if (!info) {
    return null;
  }

  return (
    <FormikProvider
      initialValues={{ ...info }}
      validationSchema={MemberInfoSchema}
      onSubmit={(values) => {
        console.log({ submit: true });
        member
          .updateInfo(values)
          .then((info) => (info ? showSuccess() : showFail()))
          .catch(() => {});
      }}
    >
      <MemberInfo member={member} />
    </FormikProvider>
  );
};
