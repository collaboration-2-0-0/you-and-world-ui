import * as T from '@shared/types/api';
import { IMember } from '../types';
import { Store } from '../lib/store/store';
import { App } from '../app';
import { NetService } from './net.service';

interface MemberState {
  info: T.IMemberInfoRes;
}

export class Member extends Store<MemberState> {
  constructor(
    private member: IMember,
    private app: App,
    private net: NetService,
  ) {
    super({ info: null });
  }

  getMember() {
    return this.member;
  }

  async createInvite(args: Pick<T.IMemberInviteParams, 'member_name'>) {
    try {
      const { member_name } = args;
      const { node_id } = this.net.state.userNet!;
      const { node_id: member_id } = this.member;
      const token = await this.app.api.member.invite.create({
        member_name,
        member_id,
        node_id,
      });
      if (token) await this.net.onMemberChanged();
      return token;
    } catch (e: any) {
      this.setError(e);
    }
  }

  async inviteCancel() {
    try {
      const { node_id } = this.net.state.userNet!;
      const { node_id: member_id } = this.member;
      const success = await this.app.api.member.invite.cancel({
        member_id,
        node_id,
      });
      if (success) await this.net.onMemberChanged();
      return success;
    } catch (e: any) {
      this.setError(e);
    }
  }

  // async inviteConfirm() {
  //   try {
  //     const { userNet: net } = this.app.getState();
  //     const success = await this.app.api.member.invite.confirm({
  //       member_id: this.member.node_id,
  //       ...net!,
  //     });
  //     if (success) await this.net.onMemberChanged();
  //     await this.net.onNetChanged();
  //     return success;
  //   } catch (e: any) {
  //     this.setError(e);
  //     throw e;
  //   }
  // }

  async inviteRefuse() {
    try {
      const { node_id } = this.net.state.userNet!;
      const { node_id: member_id } = this.member;
      const success = await this.app.api.member.invite.refuse({
        member_id,
        node_id,
      });
      if (success) await this.net.onMemberChanged();
      return success;
    } catch (e: any) {
      this.setError(e);
      throw e;
    }
  }

  async getInfo() {
    try {
      const { node_id } = this.net.state.userNet!;
      const { node_id: member_id } = this.member;
      const info = await this.app.api.member.info.read({ node_id, member_id });
      this.setState({ info });
    } catch (e) {
      this.setError(e);
      throw e;
    }
  }

  /* only for user node */
  async updateInfo(newInfo: Omit<T.IMemberInfoReq, 'node_id'>) {
    try {
      const { node_id } = this.net.state.userNet!;
      const info = await this.app.api.member.info.update({ ...newInfo, node_id });
      this.setState({ info });
      return info;
    } catch (e) {
      this.setError(e);
      throw e;
    }
  }
}
