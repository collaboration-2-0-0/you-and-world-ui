import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Account } from '@views/account/account/account';
import { WaitNets } from '@views/net/wait/wait';

export const AccountRouter = (
  <Route path={RelativeRoutesMap.ACCOUNT.INDEX}>
    <Route path="" element={<Account />} />
    <Route path={RelativeRoutesMap.ACCOUNT.WAIT} element={<WaitNets />} />
  </Route>
);

// export const AccountRouter = (
//   <Route path={RelativeRoutesMap.ACCOUNT.INDEX}>
//     <Route path="" element={<Account />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.SIGNUP} element={<Signup />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.LOGIN} element={<Login />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.LOGOUT} element={<Logout />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.OVERMAIL} element={<Overmail />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.CONFIRM} element={<Confirm />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.RESTORE} element={<Restore />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.MESSENGER} element={<Messenger />} />
//     <Route path={RelativeRoutesMap.ACCOUNT.WAIT.INDEX}>
//       <Route path="" element={<WaitNets />} />
//       <Route path={RelativeRoutesMap.ACCOUNT.WAIT.CREATE} element={<WaitCreate />} />
//     </Route>
//   </Route>
// );
