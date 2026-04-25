import { IUserNode } from './member.types';
import { ISpacesResponse } from './space.types';

export type IMemberSpacesGet = IUserNode;

export type IMemberSpacesGetResponse = ISpacesResponse;

export type IMemberSpacesAdd = IUserNode & { space_rel_id: number };

export type IMemberSpacesRemove = IUserNode & { space_rel_id: number };
