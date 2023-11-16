export type Service = {
  name: string;
  description: string;
  id?: string;
  dateCreate?: string;
  lastModified?: string;
  createdBy?: string;
};

export type Skill = {
  name: string;
  degree: string;
  id?: string;
  dateCreate?: string;
  lastModified?: string;
  createdBy?: string;
};

export type Review = {
  name: string;
  img: string;
  id?: string;
  dateCreate?: string;
  lastModified?: string;
  createdBy?: string;
};

export type Design = {
  name?: string;
  img: string;
  id?: string;
  dateCreate?: string;
  lastModified?: string;
  createdBy?: string;
};

export type Video = {
  name?: string;
  video: string;
  id?: string;
  dateCreate?: string;
  lastModified?: string;
  createdBy?: string;
};

export type AppStore = {
  activeNav: string;
};

export type FormFooter = { title: string; action: string; linkPath: string };
