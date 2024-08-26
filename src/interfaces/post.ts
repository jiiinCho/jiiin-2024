import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  tags: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  videos?: string;
  url?: string;
};

export type About = {
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
