import { User } from '../../../lib/db/models/user.model';

export const usersProviders = [{ provide: 'USER_MODEL', useValue: User }];
