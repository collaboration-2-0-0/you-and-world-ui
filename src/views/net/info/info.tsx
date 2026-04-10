import { FC } from 'react';
import { MessagesMap } from '@constants/messages';
import { RoutesMap } from '@constants/router.constants';
import { app } from '@app/app.provider';
import { handleCopy } from '@utils/utils';
import { makeTgUrl } from '@utils/format.utils';
import { modalService } from '@services/modal.service';
import { FormContainer } from '@components/containers/form.container';
import { Table } from '@components/table/table';
import { InputSimple } from '@components/controls/input/input.simple';
import { Button } from '@components/buttons/button/button';
import { NetNameForm } from '@components/forms/net/name/name';
import { useStyles } from './info.styles';

const { CREATE: waitCreatePath } = RoutesMap.NET.WAIT;

const showCopySuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CREATE);
const showCopyFail = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_COPY_FAIL);

export const NetInfo: FC = () => {
  const { buttons, netName, link } = useStyles();
  const { userNet: net, bot } = app.getState();
  const url = makeTgUrl(waitCreatePath, net?.net_link || '', bot);

  const items = [
    {
      title: 'Кількість учасників',
      value: net?.total_count_of_members || 0,
    },
  ];

  return (
    <FormContainer title="Інформація про спільноту">
      <Table items={items} />
      <div className={netName}>
        <NetNameForm />
      </div>
      <div className={link}>
        <InputSimple label="Запрошення" defaultValue={url} disabled />
        <div className={buttons}>
          <Button btnType="telegram" onClick={() => handleCopy(url, showCopySuccess, showCopyFail)}>
            копіювати
          </Button>
        </div>
      </div>
    </FormContainer>
  );
};
