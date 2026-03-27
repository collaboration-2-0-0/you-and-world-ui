import { FC, useEffect, useState } from 'react';
import { marked } from 'marked';
import clsx from 'clsx';
import { useStyles } from './md.content.styles';

interface MdContentProps {
  content: string;
  className?: string;
}

export const MdContent: FC<MdContentProps> = ({ content, className }) => {
  const { root } = useStyles();
  const [parsed, setParsed] = useState('');

  useEffect(() => {
    marked
      .parse(content, { async: true })
      .then(setParsed)
      .catch(() => setParsed('Помилка відображення контенту'));
  }, [content]);

  if (!parsed) {
    return null;
  }

  return <article className={clsx(root, className)} dangerouslySetInnerHTML={{ __html: parsed }} />;
};
