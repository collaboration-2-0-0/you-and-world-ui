import { FC, PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import { Button } from '@components/buttons/button/button';
import { useStyles } from './tabs.styles';

interface TabsProps {
  tabNames: string[];
}
export const Tabs: FC<PropsWithChildren<TabsProps>> = ({ tabNames, children }) => {
  const { root, btns, tabs } = useStyles();
  const [active, setActive] = useState(0);

  if (!Array.isArray(children)) {
    return;
  }

  const btnsJsx = tabNames.map((n, i) => (
    <Button
      key={n}
      type="button"
      btnType="text"
      className={clsx({ active: i === active })}
      onClick={() => setActive(i)}
    >
      {n}
    </Button>
  ));

  const tabsJsx = children.map((c, i) => (
    <div key={i} className={clsx({ active: i === active })}>
      {c}
    </div>
  ));

  return (
    <div className={root}>
      <div className={btns}>{btnsJsx}</div>
      <div className={tabs}>{tabsJsx}</div>
    </div>
  );
};
