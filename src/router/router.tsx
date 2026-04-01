import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { useEvents } from '@hooks/useEvents';
import { Main } from '@views/main/main';
import { About } from '@views/about/about';
import { Contacts } from '@views/contacts/contacts';
import { NetStructure } from '@views/net/structure/structure';
import { NotFound } from '@views/not.found/not.found';
import { AccountRouter } from './routes/account.router';
import { NetRouter } from './routes/net.router';

export const Router: FC = () => {
  useEvents();
  return (
    <Routes>
      <Route path={RelativeRoutesMap.ROOT} element={<Main />} />
      <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
      <Route path={RelativeRoutesMap.CONTACTS} element={<Contacts />} />
      <Route path={RelativeRoutesMap.NET_VIEW} element={<NetStructure />} />
      {AccountRouter}
      {NetRouter}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
