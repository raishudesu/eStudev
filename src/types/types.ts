export type TFeatureCard = {
  icon: string;
  characteristic: string;
  description: string;
};

export type TThread = {
  id: number;
  title: string;
  category: string[];
  content: string;
  authorName: string;
  authorId: number;
};

export type TAuthor = {
  id: string;
  username: string;
  email: string;
  bio: string;
  links: string[];
};
