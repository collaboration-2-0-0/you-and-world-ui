import { FC, PropsWithChildren } from 'react';
import { Header } from '@components/header/header';
import { NetMenu } from '@components/menu/net.menu/net.menu';
import { Footer } from '@components/footer/footer';
import { useStyles } from './layout.styles';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { root } = useStyles();

  return (
    <>
      <div className={root}>
        <Header />
        <NetMenu />
        {children}
        <Footer />
      </div>
    </>
  );
};
