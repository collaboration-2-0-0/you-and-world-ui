import { getRoutesMap } from '../router/utils';

export const RelativeRoutesMap = {
  ROOT: '',
  ABOUT: 'about',
  CONTACTS: 'contacts',
  HELP: 'help',
  ACCOUNT: {
    INDEX: 'account',
  },
  SUBSCRIPTION: 'subscription',
  NET: {
    INDEX: 'net',
    INVITE: 'invite/:token',
    WAIT: {
      INDEX: 'wait',
      CREATE: 'create/:token',
    },
    NET_ID: {
      INDEX: ':net_id',
      // GOAL: 'goal',
      // RULES: 'rules',
      // INFO: 'info',
      // BOARD: 'board',
      // CREATE: 'create',
      LEAVE: 'leave',
      // CHAT: 'chat',
      WAITING: 'waiting',
      CIRCLE: {
        INDEX: 'circle',
        INFO: 'info',
        USER: 'user',
        // CHAT: 'chat',
        NODE_ID: {
          INDEX: ':node_id',
        },
      },
      TREE: {
        INDEX: 'tree',
        USER: 'user',
        // CHAT: 'chat',
        INFO: 'info',
        NODE_ID: {
          INDEX: ':node_id',
          INVITE: 'invite',
          CONNECTED: 'connected',
        },
      },
    },
  },
};

export const RoutesMap = getRoutesMap(RelativeRoutesMap) as typeof RelativeRoutesMap;
