export class Article {
  title: string;
  link: string;
  image?: string;
  description?: string;
  timestamp: Date;
  audio?: { src: string, type: string }[];
  webpageMetadata: {
    image?: string;
    twiter?: string;
    title?: string;
    url?: string;
    website?: string;
    type?: string;
  };

}