import * as T from '@shared/types/api';
import { Store } from '../lib/store/store';
import { App } from '../app';
import { Member } from './member.service';
import { NetService } from './net.service';

interface MemberSpacesState {
  spaces: T.ISpace[];
}

export class MemberSpaces extends Store<MemberSpacesState> {
  constructor(
    private app: App,
    private net: NetService,
    private member: Member,
  ) {
    super({ spaces: [] });
  }

  async get() {
    try {
      const { node_id } = this.net.state.userNet!;
      const { node_id: member_id } = this.member.get();
      const spaces = await this.app.api.member.space.get({
        node_id,
        member_id,
      });
      this.setState({ spaces });
    } catch (e: any) {
      this.setError(e);
    }
  }

  async add(space: T.ISpace) {
    try {
      const { node_id } = this.member.get();
      await this.app.api.member.space.add({
        node_id,
        space_rel_id: space.space_rel_id,
      });
      this.get().catch(() => null);
    } catch (e: any) {
      this.setError(e);
    }
  }

  async remove(space: T.ISpace) {
    try {
      const { node_id } = this.member.get();
      await this.app.api.member.space.remove({
        node_id,
        space_rel_id: space.space_rel_id,
      });
      this.get().catch(() => null);
    } catch (e: any) {
      this.setError(e);
    }
  }
}
