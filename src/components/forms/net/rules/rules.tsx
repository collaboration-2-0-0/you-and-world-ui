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
  const { submitForm, values } = useFormikContext<NetRulesFormValues>();
  const { userNetData, userNet } = app.getState();
  const editable = userNetData?.parent_node_id === null;

  const handleSubmit = () => {
    const changed = userNet!.rules !== values[NetRulesField.RULES];
    if (changed) {
      submitForm().catch(() => null);
    }
  };

  return <MdContentEdit name={NetRulesField.RULES} onEditEnd={handleSubmit} editable={editable} />;
};

export const NetRulesForm = () => {
  const { userNet: net } = app.getState();
  const { rules } = net!;

  return (
    <FormikProvider
      initialValues={{ rules: rules || '' }}
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
          .catch(() => showFail());
      }}
    >
      <NetRules />
    </FormikProvider>
  );
};
