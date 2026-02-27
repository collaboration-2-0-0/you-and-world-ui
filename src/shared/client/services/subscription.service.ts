import * as T from '@shared/types/api';
import { Store } from '../lib/store/store';
import { App } from '../app';

interface SubscriptionServiceState {
  subscriptions: Record<T.SubscriptionSubjectKeys, Record<T.SubscriptionTypeKeys, boolean>>;
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
  constructor(private app: App) {
    super({ subscriptions: getState() }, undefined, 'INIT');
  }

  reset() {
    this.setState({ subscriptions: getState() });
  }

  async read() {
    const { node_id } = this.app.net.state.userNet || {};
    if (!node_id) return;
    const result = await this.app.api.subscription.get({ node_id });
    const subscriptions = result.reduce((s, it) => {
      s[it.subject][it.type] = true;
      return s;
    }, getState());
    this.setState({ subscriptions });
  }

  async update(subscription: T.ISubscription) {
    const { node_id } = this.app.net.state.userNet || {};
    if (!node_id) return;
    await this.app.api.subscription.update({ ...subscription, node_id });
    await this.read();
  }

  async remove(subscription?: T.ISubscription) {
    const { node_id } = this.app.net.state.userNet || {};
    if (!node_id) return;
    await this.app.api.subscription.remove({ ...subscription, node_id });
    await this.read();
  }
}
