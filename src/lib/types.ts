export type FrameworkItemType = {
  title: string;
  slug: string;
  package: string;
  links: {
    website?: string;
    github?: string;
  };
  isActive: boolean;
};

export type PackItemType = {
  title: string;
  slug: string;
  license: string;
  icons: number;
  links: {
    website?: string;
    github?: string;
  };
};
