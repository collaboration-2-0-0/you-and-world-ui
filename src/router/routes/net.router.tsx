import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Net } from '@views/net/net';
import { NetCreate } from '@views/net/create/create';
import { NetInvite } from '@views/net/invite/invite';
import { WaitNets } from '@views/net/wait/wait';
import { WaitCreate } from '@views/net/wait/wait.create';
import { NetIdIndex } from '@views/net/net.id/net.id.index';
import { NetId } from '@views/net/net.id/net.id';
import { NetGoal } from '@views/net/goal/goal';
import { NetRules } from '@views/net/rules/rules';
import { NetInfo } from '@views/net/info/info';
import { NetLeave } from '@views/net/leave/leave';
import { NetWaiting } from '@views/net/waiting/waiting';
import { SubscriptionView } from '@views/subscription/subscription';
import { TreeRouter } from './tree.router';
import { CircleRouter } from './circle.router';

const { NET } = RelativeRoutesMap;
const { NET_ID } = NET;

export const NetRouter = (
  <Route path={NET.INDEX}>
    <Route path="" element={<Net />} />
    <Route path={NET.CREATE} element={<NetCreate />} />
    <Route path={NET.INVITE} element={<NetInvite />} />
    <Route path={RelativeRoutesMap.NET.WAIT.INDEX}>
      <Route path="" element={<WaitNets />} />
      <Route path={RelativeRoutesMap.NET.WAIT.CREATE} element={<WaitCreate />} />
    </Route>
    <Route path={NET_ID.INDEX} element={<NetIdIndex />}>
      <Route path="" element={<NetId />} />
      <Route path={NET_ID.GOAL} element={<NetGoal />} />
      <Route path={NET_ID.RULES} element={<NetRules />} />
      <Route path={NET_ID.INFO} element={<NetInfo />} />
      <Route path={NET_ID.CREATE} element={<NetCreate />} />
      <Route path={NET_ID.LEAVE} element={<NetLeave />} />
      <Route path={NET_ID.WAITING} element={<NetWaiting />} />
      <Route path={NET_ID.SUBSCRIPTION} element={<SubscriptionView />} />
      {TreeRouter}
      {CircleRouter}
    </Route>
  </Route>
);
