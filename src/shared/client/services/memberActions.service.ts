import * as T from '@shared/types/api';
import { Store } from '../lib/store/store';
import { App } from '../app';
import { NetService } from './net.service';

export class MemberActions extends Store {
  constructor(
    private app: App,
    private net: NetService,
  ) {
    super({});
  }

  getName(netView: T.NetViewEnum, member: T.IMemberResponse, memberPosition: number) {
    const position = netView === 'tree' ? memberPosition + 1 : memberPosition && memberPosition + 1;
    const { name, member_name: memberName } = member;
    return name || memberName || `Учасник ${position}`;
  }

  async setDislike(member_id: number) {
    try {
      const { node_id } = this.net.state.userNet!;
      const success = await this.app.api.member.data.dislike.set({
        node_id,
        member_id,
      });
      success && (await this.net.onMemberChanged());
      return success;
    } catch (e: any) {
      this.setError(e);
    }
  }

  async unsetDislike(member_id: number) {
    try {
      const { node_id } = this.net.state.userNet!;
      const success = await this.app.api.member.data.dislike.unSet({
        node_id,
        member_id,
      });
      success && (await this.net.onMemberChanged());
      return success;
    } catch (e: any) {
      this.setError(e);
    }
  }

  async setVote(member_id: number) {
    try {
      const { node_id } = this.net.state.userNet!;
      const voted = await this.app.api.member.data.vote.set({
        node_id,
        member_id,
      });
      if (voted === false) {
        await this.net.onMemberChanged();
        await this.net.onUserNetDataChanged();
      }
      return voted !== null;
    } catch (e: any) {
      this.setError(e);
    }
  }

  async unsetVote(member_id: number) {
    try {
      const { node_id } = this.net.state.userNet!;
      const success = await this.app.api.member.data.vote.unSet({
        node_id,
        member_id,
      });
      if (success) {
        if (member_id === node_id) await this.net.onUserNetDataChanged();
        else await this.net.onMemberChanged();
      }
      return success;
    } catch (e: any) {
      this.setError(e);
    }
  }
}
