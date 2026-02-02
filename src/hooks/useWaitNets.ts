import { useCallback, useEffect } from 'react';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';

const showSuccess = () => modalService.showMessage(MessagesMap.WAIT_REMOVED);

export const useWaitNets = () => {
  const { waitNets } = app.userNets.useState(['waitNets']);

  useEffect(() => {
    app.userNets.getWaitNets().catch(() => {});
  }, []);

  const onRemove = useCallback((net_id: number) => {
    app.userNets
      .waitRemove({ net_id })
      .then(showSuccess)
      .catch(() => {});
  }, []);

  return { waitNets, onRemove };
};
