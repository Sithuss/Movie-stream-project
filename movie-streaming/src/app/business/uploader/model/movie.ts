export interface Movie {
  id: number;
  title: string;
  length: number;
  category: string[];
  casts: string[];
  director: string;
  publisher: string;
  released: Date;
  description: string;
  photo: string;
  trailer: string;
  movieFile: any;
  premium: true;
  pCount:number;
  script: string;
}
