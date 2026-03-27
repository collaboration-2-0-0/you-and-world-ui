import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';
import { useStyles } from './md.content.styles';

interface MdContentProps {
  content: string;
  className?: string;
}

export const MdContent: FC<MdContentProps> = ({ content, className }) => {
  const { root } = useStyles();

  return (
    <article className={clsx(root, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // components={{
        //   h1: ({ children }) => <h1 className={classes.h1}>{children}</h1>,
        //   h2: ({ children }) => <h2 className={classes.h2}>{children}</h2>,
        //   h3: ({ children }) => <h3 className={classes.h3}>{children}</h3>,
        //   h4: ({ children }) => <h4 className={classes.h4}>{children}</h4>,
        //   p: ({ children }) => <p className={classes.p}>{children}</p>,
        //   a: ({ href, children }) => (
        //     <a className={classes.a} href={href} target="_blank" rel="noreferrer">
        //       {children}
        //     </a>
        //   ),
        //   ul: ({ children }) => <ul className={classes.ul}>{children}</ul>,
        //   ol: ({ children }) => <ol className={classes.ol}>{children}</ol>,
        //   li: ({ children }) => <li className={classes.li}>{children}</li>,
        //   code: ({
        //     inline,
        //     children,
        //     ...props
        //   }: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) =>
        //     inline ? (
        //       <code className={classes.inlineCode} {...props}>
        //         {children}
        //       </code>
        //     ) : (
        //       <code className={classes.code} {...props}>
        //         {children}
        //       </code>
        //     ),
        //   pre: ({ children }) => <pre className={classes.pre}>{children}</pre>,
        //   blockquote: ({ children }) => (
        //     <blockquote className={classes.blockquote}>{children}</blockquote>
        //   ),
        //   hr: () => <hr className={classes.hr} />,
        //   table: ({ children }) => (
        //     <div className={classes.tableWrap}>
        //       <table className={classes.table}>{children}</table>
        //     </div>
        //   ),
        //   th: ({ children }) => <th className={classes.th}>{children}</th>,
        //   td: ({ children }) => <td className={classes.td}>{children}</td>,
        // }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
