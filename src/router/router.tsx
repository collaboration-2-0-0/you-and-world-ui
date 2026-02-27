import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Main } from '@views/main/main';
// import { SubscriptionView } from '@views/subscription/subscription';
import { About } from '@views/about/about';
import { Contacts } from '@views/contacts/contacts';
import { useEvents } from '@hooks/useEvents';
import { AccountRouter } from './routes/account.router';
import { NetRouter } from './routes/net.router';
import { NotFound } from '@views/not.found/not.found';

export const Router: FC = () => {
  useEvents();
  return (
    <Routes>
      <Route path={RelativeRoutesMap.ROOT} element={<Main />} />
      {/* <Route path={RelativeRoutesMap.SUBSCRIPTION} element={<SubscriptionView />} /> */}
      <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
      <Route path={RelativeRoutesMap.CONTACTS} element={<Contacts />} />
      {AccountRouter}
      {NetRouter}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
