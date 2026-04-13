import { FC } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { NetGoalField, NetGoalFormValues, NetGoalSchema } from './goal.schema';
import { MdContentEdit } from '@components/controls/md-content-edit/md.content.edit';

const FormikProvider = Formik<NetGoalFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError('FAIL');

const NetGoal: FC = () => {
  const { submitForm, values, errors } = useFormikContext<NetGoalFormValues>();
  const { userNet } = app.net.state;
  const { parent_node_id, goal } = userNet!;
  const editable = parent_node_id === null;

  const handleSubmit = () => {
    const changed = goal !== values[NetGoalField.GOAL];
    if (changed) {
      const error = errors[NetGoalField.GOAL];
      if (error) {
        modalService.showError(`${error}`);
      } else {
        submitForm().catch(() => null);
      }
    }
  };

  return <MdContentEdit name={NetGoalField.GOAL} onEditEnd={handleSubmit} editable={editable} />;
};

export const NetGoalForm = () => {
  const { userNet: net } = app.net.state;

  return (
    <FormikProvider
      initialValues={{ goal: net!.goal || '' }}
      validationSchema={NetGoalSchema}
      onSubmit={async (values) => {
        await app.net
          .update(values)
          .then((newNet) => {
            if (newNet) {
              showSuccess();
            } else {
              showFail();
            }
          })
          .catch(() => null);
      }}
    >
      <NetGoal />
    </FormikProvider>
  );
};
