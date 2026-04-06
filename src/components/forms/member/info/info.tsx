import { FC, useEffect, useRef } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { app } from '@components/app/app.provider';
import { Member } from '@shared/client/services/member.service';
import { modalService } from '@services/modal.service';
import { MdContentEdit } from '@components/controls/md-content-edit/md.content.edit';
import { MemberInfoField, MemberInfoFormValues, MemberInfoSchema } from './info.types';

const FormikProvider = Formik<MemberInfoFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError('FAIL');

const MemberInfo: FC<MemberInfoFormProps> = ({ member, field }) => {
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

  return <MdContentEdit name={field} onEditEnd={handleSubmit} editable={editable} />;
};

interface MemberInfoFormProps {
  member: Member;
  field: MemberInfoField;
}

export const MemberInfoForm: FC<MemberInfoFormProps> = ({ field, member }) => {
  const { info } = member.useState(['info']);

  if (!info) {
    return null;
  }

  return (
    <FormikProvider
      initialValues={{ [field]: info[field], member_id: info.member_id }}
      validationSchema={MemberInfoSchema}
      onSubmit={(values) => {
        console.log({ submit: true });
        member
          .updateInfo(values)
          .then((info) => (info ? showSuccess() : showFail()))
          .catch(() => {});
      }}
    >
      <MemberInfo member={member} field={field} />
    </FormikProvider>
  );
};
