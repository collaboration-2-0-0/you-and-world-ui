import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Net } from '@views/net/net';
import { NetInvite } from '@views/net/invite/invite';
import { WaitNets } from '@views/net/wait/wait';
import { WaitCreate } from '@views/net/wait/wait.create';
import { NetIdIndex } from '@views/net/net.id/net.id.index';
import { NetId } from '@views/net/net.id/net.id';
import { NetLeave } from '@views/net/leave/leave';
import { NetWaiting } from '@views/net/waiting/waiting';
import { TreeRouter } from './tree.router';
import { CircleRouter } from './circle.router';

const { NET } = RelativeRoutesMap;
const { NET_ID } = NET;

export const NetRouter = (
  <Route path={NET.INDEX}>
    <Route path="" element={<Net />} />
    <Route path={NET.INVITE} element={<NetInvite />} />
    <Route path={RelativeRoutesMap.NET.WAIT.INDEX}>
      <Route path="" element={<WaitNets />} />
      <Route path={RelativeRoutesMap.NET.WAIT.CREATE} element={<WaitCreate />} />
    </Route>
    <Route path={NET_ID.INDEX} element={<NetIdIndex />}>
      <Route path="" element={<NetId />} />
      <Route path={NET_ID.LEAVE} element={<NetLeave />} />
      <Route path={NET_ID.WAITING} element={<NetWaiting />} />
      {TreeRouter}
      {CircleRouter}
    </Route>
  </Route>
);
