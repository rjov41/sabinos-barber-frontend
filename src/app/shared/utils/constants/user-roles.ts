type RoleName = 'ADMIN' | 'USER' | 'MODERATOR' | 'GUEST';

export const ROLE_DATA: Record<RoleName, { name: string; level: number }> = {
  ADMIN: { name: 'administrador', level: 3 },
  USER: { name: 'user', level: 1 },
  MODERATOR: { name: 'moderator', level: 2 },
  GUEST: { name: 'guest', level: 0 },
};
