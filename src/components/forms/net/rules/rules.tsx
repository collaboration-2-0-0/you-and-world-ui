import { FC } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { MdContentEdit } from '@components/controls/md-content-edit/md.content.edit';
import { app } from '@components/app/app.provider';
import { NetRulesSchema, NetRulesFormValues, NetRulesField } from './rules.schema';

const FormikProvider = Formik<NetRulesFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError('FAIL');

const NetRules: FC = () => {
  const { submitForm, values, errors } = useFormikContext<NetRulesFormValues>();
  const { userNet: net } = app.net.state;
  const { parent_node_id, rules } = net!;
  const editable = parent_node_id === null;

  const handleSubmit = () => {
    const changed = rules !== values[NetRulesField.RULES];
    if (changed) {
      const error = errors[NetRulesField.RULES];
      if (error) {
        modalService.showError(`${error}`);
      } else {
        submitForm().catch(() => null);
      }
    }
  };

  return <MdContentEdit name={NetRulesField.RULES} onEditEnd={handleSubmit} editable={editable} />;
};

export const NetRulesForm = () => {
  const { userNet: net } = app.getState();

  return (
    <FormikProvider
      initialValues={{ rules: net!.rules || '' }}
      validationSchema={NetRulesSchema}
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
      <NetRules />
    </FormikProvider>
  );
};
