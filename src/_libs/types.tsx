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

export type CreateReview = {
  name: string;
  img: string | Blob | any;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type Review = {
  name: string;
  img: string | Blob | any;
  id: string;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type CreateDesign = {
  name?: string;
  img: string | Blob | any;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type Design = {
  name?: string;
  img: string | Blob | any;
  id: string;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type CreateVideo = {
  name?: string;
  video: string | Blob | any;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type Video = {
  name?: string;
  video: string | Blob | any;
  id: string;
  dateCreate?: string | number;
  lastModified?: string;
  createdBy?: string;
};

export type AppStore = {
  activeNav: string;
  designs: Design[];
  reviews: Review[];
  videos: Video[];
};

export type FormFooter = { title: string; action: string; linkPath: string };
