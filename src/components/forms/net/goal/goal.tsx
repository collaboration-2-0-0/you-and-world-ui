import { FC, useEffect } from 'react';
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
  const { userNetData, userNet } = app.getState();

  const { parent_node_id: parentNodeId } = userNetData!;
  const editable = parentNodeId === null;

  const handleSubmit = () => {
    const changed = userNet!.goal !== values[NetGoalField.GOAL];
    if (changed) {
      submitForm().catch(() => null);
    }
  };

  useEffect(() => {
    const error = errors[NetGoalField.GOAL];
    if (error) {
      modalService.showError(`${error}`);
    }
  }, [errors]);

  return <MdContentEdit name={NetGoalField.GOAL} onEditEnd={handleSubmit} editable={editable} />;
};

export const NetGoalForm = () => {
  const { userNet: net } = app.getState();
  const { goal } = net!;

  return (
    <FormikProvider
      initialValues={{ goal: goal || '' }}
      validationSchema={NetGoalSchema}
      onSubmit={async (values) => {
        await app.net
          .update(values)
          .then((newNet) => {
            if (!newNet) return showFail();
            showSuccess();
          })
          .catch(() => null);
      }}
    >
      <NetGoal />
    </FormikProvider>
  );
};
