import { Local } from './Local.model';

export interface UserAuth {
  userId: number;
  nombre: string;
  apellido: string;
  cargo: string;
  email: string;
  email_verified_at?: any;
  user_estado: number;
  user_created_at: string;
  user_updated_at: string;
  roleId: number;
  roleName: string;
  local_id: number;
  local: Local;
}

export interface Auth {
  token: string;
  user: UserAuth;
}
