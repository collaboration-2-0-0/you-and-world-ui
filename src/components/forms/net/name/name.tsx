import { FC, FormEvent } from 'react';
import { Formik, useFormikContext } from 'formik';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { Input } from '@components/controls/input/input';
import { Button } from '@components/buttons/button/button';
import { NetNameField, NetNameFormValues, NetNameSchema } from './name.schema';
import { useStyles } from './name.styles';

const FormikProvider = Formik<NetNameFormValues>;
const showSuccess = () => modalService.showMessage(MessagesMap.SUCCESS);
const showFail = () => modalService.showError(MessagesMap.FAIL);

const NetName: FC = () => {
  const { buttons } = useStyles();
  const { submitForm, values } = useFormikContext<NetNameFormValues>();
  const { userNet } = app.net.state;
  const { parent_node_id, name } = userNet!;
  const editable = parent_node_id === null;

  const changed = name !== values[NetNameField.NAME];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (changed) {
      submitForm().catch(() => null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="Назва спільноти" name={NetNameField.NAME} disabled={!editable} />
      {editable ? (
        <div className={buttons}>
          <Button type="submit" onClick={() => {}} btnType="telegram" disabled={!changed}>
            зберегти
          </Button>
        </div>
      ) : null}
    </form>
  );
};

export const NetNameForm = () => {
  const { userNet } = app.net.state;
  const { name } = userNet!;

  return (
    <FormikProvider
      initialValues={{ name }}
      validationSchema={NetNameSchema}
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
      <NetName />
    </FormikProvider>
  );
};
