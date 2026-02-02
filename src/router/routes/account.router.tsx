import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
// import { Account } from '@views/account/account/account';

export const AccountRouter = (
  <Route path={RelativeRoutesMap.ACCOUNT.INDEX}>
    <Route path="" element={<div>ACCOUNT</div>} />
  </Route>
);
