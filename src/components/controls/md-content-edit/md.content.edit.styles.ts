import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars, palette }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: vars.gap.M,
      height: '100%',
      overflow: 'hidden',
    },
    text: {
      flex: '1 0 0',
      overflow: 'auto',
      color: palette.first.main,
      fontSize: vars.fontSize.M - 3,
      background: 'transparent',
      '&.edit': {
        color: palette.add.main,
        border: '1px solid',
        borderRadius: vars.radius.S,
        padding: `0 ${vars.gap.S}`,
      },
      '& a': {
        color: palette.add.main,
      },
      '& h2, h3': {
        marginTop: vars.gap.L,
        width: '100%',
        '&:first-child': {
          marginTop: vars.gap.M,
        },
      },
      '& ul, ol': {
        listStyleType: 'disc',
        paddingLeft: vars.gap.L,
      },
      '& li': {
        listStyleType: 'disc',
      },
    },
  }),
  { name: 'MdContent' },
);
