import { FC, useCallback, useEffect } from 'react';
import { ISpace } from '@shared/types/db';
import { Member } from '@client/services/member.service';
import { app } from '@components/app/app.provider';
import { modalService } from '@services/modal.service';
import { Button } from '@components/buttons/button/button';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { SpaceTreeSelect } from './select.space';
import { useStyles } from './spaces.styles';

export const MemberSpaces: FC<{ member: Member }> = ({ member }) => {
  const { list, row, name, description, actions } = useStyles();
  const { spaces } = member.memberSpaces.useState(['spaces']);
  const { node_id } = member.get();
  const { userNet } = app.getState();
  const isUser = userNet?.node_id === node_id;

  useEffect(() => {
    member.memberSpaces.get().catch(() => null);
  }, [member]);

  const handleAdd = useCallback(
    (space: ISpace) => {
      member.memberSpaces
        .add(space)
        .then(() => {
          modalService.closeModal();
        })
        .catch(() => null);
    },
    [member],
  );

  const handleDelete = useCallback(
    (space: ISpace) => {
      member.memberSpaces.remove(space).catch(() => null);
    },
    [member],
  );

  const handleOpenModal = useCallback(() => {
    modalService.openModal(<SpaceTreeSelect onSelect={handleAdd} />);
  }, [handleAdd]);

  if (!isUser) {
    return (
      <div>
        <div className={list}>
          {spaces.map((space) => (
            <div key={space.space_rel_id} className={row}>
              <div className={name}>
                {space.name}
                {space.description && <span className={description}>{space.description}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={list}>
        {spaces.map((space) => (
          <div key={space.space_rel_id} className={row}>
            <div className={name}>
              {space.name}
              {space.description && <span className={description}>{space.description}</span>}
            </div>
            <div className={actions}>
              <IconButton icon="remove" onClick={() => handleDelete(space)} />
            </div>
          </div>
        ))}
      </div>
      <Button btnType="primary" onClick={handleOpenModal}>
        додати простір
      </Button>
    </div>
  );
};
