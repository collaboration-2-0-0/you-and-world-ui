import { Store } from '../lib/store/store';
import { App } from '../app';
import { NetService } from './net.service';
import {
  ISubscription,
  SubscriptionSubjectKeys,
  SubscriptionTypeKeys,
} from '@shared/local/imports';

interface SubscriptionServiceState {
  subscriptions: Record<SubscriptionSubjectKeys, Record<SubscriptionTypeKeys, boolean>>;
}

const getState = (): SubscriptionServiceState['subscriptions'] =>
  ({
    REPORT: {
      ON_UPDATE: false,
      ONE_WEEK: false,
      TWO_WEEK: false,
      ONE_MONTH: false,
    } as const,
    URGENT: {
      ON_UPDATE: false,
      ONE_WEEK: false,
      TWO_WEEK: false,
      ONE_MONTH: false,
    } as const,
  }) as const;

export class Subscription extends Store<SubscriptionServiceState> {
  constructor(
    private app: App,
    private net: NetService,
  ) {
    super({ subscriptions: getState() }, undefined, 'INIT');
    console.log(app.api?.subscription);
    setTimeout(() => console.log(app.api.subscription), 2000);
  }

  private get api() {
    return this.app.api.subscription;
  }

  reset() {
    this.setState({ subscriptions: getState(), status: 'INIT' });
  }

  async read() {
    const { node_id } = this.net.state.userNet || {};
    if (!node_id) return;
    const result = await this.api.get({ node_id });
    const subscriptions = result.reduce((s, it) => {
      s[it.subject][it.type] = true;
      return s;
    }, getState());
    this.setState({ subscriptions, status: 'READY' });
  }

  async update(subscription: ISubscription) {
    const { node_id } = this.net.state.userNet || {};
    if (!node_id) return;
    await this.api.update({ ...subscription, node_id });
    await this.read();
  }

  async remove(subscription?: ISubscription) {
    const { node_id } = this.net.state.userNet || {};
    if (!node_id) return;
    await this.api.remove({ ...subscription, node_id });
    await this.read();
  }
}
