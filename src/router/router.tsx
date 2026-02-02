import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Main } from '@views/main/main';
import { SubscriptionView } from '@views/subscription/subscription';
import { About } from '@views/about/about';
import { Contacts } from '@views/contacts/contacts';
import { Help } from '@views/help/help';
import { useEvents } from '@hooks/useEvents';
import { NetRouter } from './routes/net.router';
import { NotFound } from '@views/not.found/not.found';

export const Router: FC = () => {
  useEvents();
  return (
    <Routes>
      <Route path={RelativeRoutesMap.ROOT} element={<Main />} />
      <Route path={RelativeRoutesMap.SUBSCRIPTION} element={<SubscriptionView />} />
      <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
      <Route path={RelativeRoutesMap.CONTACTS} element={<Contacts />} />
      <Route path={RelativeRoutesMap.HELP} element={<Help />} />
      {/* {AccountRouter} */}
      {NetRouter}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
