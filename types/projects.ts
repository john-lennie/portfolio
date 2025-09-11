// types/projects.ts
export type ImageMedia = {
  type: "image";
  src: string;
  width: number;
  height: number;
};

export type MobileVideoMedia = {
  type: "mobileVideo";
  src: string;
  poster: string;
};

export type DesktopVideoMedia = {
  type: "desktopVideo";
  src: string;
  poster: string;
};

export type ProjectMedia = ImageMedia | MobileVideoMedia | DesktopVideoMedia;

export type DescriptionItem =
  | string
  | {
      text: string;
      link: string;
    };

export type StackTags = {
  frontEnd?: string;
  ui?: string;
  [key: string]: string | undefined; // if more keys may appear
};

export type Project = {
  name: string;
  year: string;
  type: string;
  stack: string;
  media: ProjectMedia[];
  description: DescriptionItem[];
  stackTags: StackTags;
};
