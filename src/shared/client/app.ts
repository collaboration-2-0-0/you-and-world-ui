import { UserStatusKey, IEvents } from '@shared/types/api';
import { IMessage, MessageTypeKeys } from '@shared/local/imports';
import { Store } from './lib/store/store';
import { Account } from './services/account.service';
import { Api } from './services/api.service';
import { NetService } from './services/net.service';
import { UserNets } from './services/user.nets.class';
import { EventService } from './services/events.class';

interface AppState {
  userStatus: UserStatusKey;
}

const INITIAL_STATE: AppState = {
  userStatus: 'NOT_LOGGED_IN',
};

export class App extends Store<AppState> {
  apiService: Api;
  account: Account = new Account(this);
  net: NetService = new NetService(this);
  userNets: UserNets = new UserNets(this);
  userEvents: EventService = new EventService(this);

  constructor() {
    super(INITIAL_STATE, undefined, 'INIT');
    this.apiService = new Api(() => {
      this.handleConnect().catch(() => null);
    }, this.setMessage.bind(this));
    this.account.subscribe(() => this.onNewUser(), ['user']);
    this.net.subscribe(() => this.onNewNet(), ['userNet']);
  }

  get api() {
    return this.apiService.api;
  }

  async init() {
    try {
      await this.apiService.init();
      await this.account.init();
      this.setState({ status: 'READY' });
    } catch (e: any) {
      this.setError(e);
    }
  }

  getState() {
    return {
      ...this.account.getState(),
      userStatus: this.$state.userStatus,
      ...this.userNets.state,
      ...this.net.state,
      events: this.userEvents.getEvents(),
    };
  }

  private async handleConnect() {
    if (this.status === 'INIT') {
      return;
    }

    const { userStatus } = this.$state;
    if (userStatus === 'NOT_LOGGED_IN') {
      return;
    }

    await this.api.chat.connect.user().catch((e) => this.setError(e));
    await this.userEvents.read().catch((e) => this.setError(e));
  }

  private setInitialValues() {
    this.userNets.clear();
    this.userEvents.reset();
  }

  private setUserStatus() {
    const { user } = this.account.state;
    if (!user) {
      this.setState({ userStatus: 'NOT_LOGGED_IN' });
      return;
    }
    const { userNet, userNetData } = this.net.state;
    if (!userNet) {
      this.setState({ userStatus: user.user_status });
      return;
    }
    const { confirmed } = userNetData || {};
    if (confirmed) this.setState({ userStatus: 'INSIDE_NET' });
    else this.setState({ userStatus: 'INVITING' });
  }

  private async onNewUser() {
    try {
      const { user } = this.account.state;
      if (!user) this.setInitialValues();
      else if (user.user_status === 'LOGGED_IN') {
        await this.userNets.getAllNets();
        await this.userNets.getWaitNets();
        await this.api.chat.connect.user();
      }
      this.setUserStatus();
    } catch (e) {
      this.setError(e);
    }
  }

  private onNewNet() {
    this.userNets.getNets();
    this.setUserStatus();
  }

  async onNewNets() {
    try {
      await this.userNets.getAllNets();
    } catch (e) {
      this.setError(e);
    }
  }

  async onNewEvents(events: IEvents) {
    const { userNet: net } = this.net.state;
    const { net_id } = net || {};
    let updateUser = false;
    let updateNet = false;
    for (const event of events) {
      const { net_id: eventNetId, net_view: netView, message } = event;
      if (!eventNetId) {
        updateUser = true;
        if (net_id) {
          updateNet = false;
        }
        break;
      }
      if (net_id === eventNetId || !netView) updateNet = true;
      if (!message) this.userEvents.drop(event);
    }
    if (updateUser) {
      if (net_id) {
        try {
          await this.net.enter(net_id);
        } catch {
          window.location.href = window.location.origin;
          return;
        }
      }
      await this.onNewUser().catch(console.log);
    }
    if (updateNet) await this.net.enter(net_id!).catch(console.log);
  }

  setMessage<T extends MessageTypeKeys>(messageData: IMessage<T>) {
    if (!messageData) return;

    if (this.userEvents.isEventMessage(messageData)) {
      return this.userEvents.newEventMessage(messageData);
    }
  }
}
