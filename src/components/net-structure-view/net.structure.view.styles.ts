import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  () => ({
    root: {
      width: '100%',
      overflow: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    canvas: {
      display: 'block',
    },
  }),
  { name: 'NetStructureView' },
);
