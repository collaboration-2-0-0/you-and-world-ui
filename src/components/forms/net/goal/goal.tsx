import { FC, FormEvent } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { RoutesMap } from '@constants/router.constants';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { makeTgUrl } from '@utils/format.utils';
import { handleCopy } from '@utils/utils';
import { InputSimple } from '@components/controls/input/input.simple';
import { TextArea } from '@components/controls/textarea/textarea';
import { Button } from '@components/buttons/button/button';
import { NetGoalField, NetGoalFormValues, NetGoalSchema } from './goal.schema';
import { useStyles } from './goal.styles';

const { CREATE: waitCreatePath } = RoutesMap.NET.WAIT;

const FormikProvider = Formik<NetGoalFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError('FAIL');
const showCopySuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CREATE);
const showCopyFail = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_COPY_FAIL);

const NetGoal: FC = () => {
  const { buttons } = useStyles();
  const { submitForm, values } = useFormikContext<NetGoalFormValues>();
  const { userNet: net, userNetData, bot } = app.getState();

  const { parent_node_id: parentNodeId } = userNetData!;
  const { goal, total_count_of_members: countOfMembers } = net!;
  const changed = goal !== values[NetGoalField.GOAL];
  const editable = parentNodeId === null && countOfMembers === 1;
  const url = makeTgUrl(waitCreatePath, net?.net_link || '', bot);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm().catch(() => null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSimple label="Запрошення" defaultValue={url} contentEditable={false} />
      <div className={buttons}>
        <Button btnType="primary" onClick={() => handleCopy(url, showCopySuccess, showCopyFail)}>
          копіювати
        </Button>
      </div>
      <TextArea label="Мета спільноти" name={NetGoalField.GOAL} disabled={!editable} />
      <div className={buttons}>
        <Button
          type="submit"
          onClick={() => {}}
          btnType="secondary"
          disabled={!changed || !editable}
        >
          зберегти
        </Button>
      </div>
    </form>
  );
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
          .catch(() => {});
      }}
    >
      <NetGoal />
    </FormikProvider>
  );
};
