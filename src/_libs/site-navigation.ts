import { AdminPages } from './enums';

export const ADMIN_HOME = { name: AdminPages.Home, href: '/admin' };
export const ADD_SERVICE = { name: AdminPages.Service, href: '/admin/service' };
export const SKILLS = { name: AdminPages.Skill, href: '/admin/skill' };
export const DESIGN = { name: AdminPages.Design, href: '/admin/design' };
export const VIDEO = { name: AdminPages.Video, href: '/admin/video' };
export const CLEINT_REVIEW = { name: AdminPages.Review, href: '/admin/review' };
export const ADD_USER = { name: AdminPages.User, href: '/admin/user' };

export const LOGIN = { name: AdminPages.Login, href: '/admin/auth/login' };
export const RESET_PASSWORD = {
  name: AdminPages.User,
  href: '/admin/auth/reset',
};
