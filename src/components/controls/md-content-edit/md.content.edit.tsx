import { FC, TextareaHTMLAttributes, useCallback, useRef, useState } from 'react';
import { useField } from 'formik';
import clsx from 'clsx';
import { Button } from '@components/buttons/button/button';
import { MdContent } from '../md-content/md.content.b';
import { useStyles } from './md.content.edit.styles';

interface MdContentEditProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  editable: boolean;
  onEditEnd: () => void;
}

export const MdContentEdit: FC<MdContentEditProps> = (props) => {
  const { root, text } = useStyles();
  const [edit, setEdit] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const { name = '', editable, onEditEnd } = props;
  const [formikProps] = useField({ name });

  const handleEdit = useCallback(
    () =>
      setEdit((v) => {
        if (v) {
          setTimeout(() => onEditEnd(), 0);
        }
        return !v;
      }),
    [onEditEnd],
  );

  if (!editable) {
    return (
      <div className={root}>
        <MdContent content={formikProps.value} className={text} />;
      </div>
    );
  }

  if (edit) {
    return (
      <div className={root}>
        <Button btnType="secondary" onClick={handleEdit}>
          Зберегти
        </Button>
        <textarea ref={textRef} className={clsx(text, 'edit')} {...formikProps} />
      </div>
    );
  }

  return (
    <div className={root}>
      <Button btnType="primary" onClick={handleEdit}>
        Редагувати
      </Button>
      <MdContent content={formikProps.value} className={text} />
      {/* <MdContent content={formikProps.value} className={text} /> */}
    </div>
  );
};
