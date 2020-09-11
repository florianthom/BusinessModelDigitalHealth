import { User } from '@app/graphql/generated/graphql';

export interface BulletPoint
{
    id: string,
    text: string,
    note?: string,
    createdAt: any,
    createdBy: User,
    updatedAt: any,
    updatedBy: User
  }