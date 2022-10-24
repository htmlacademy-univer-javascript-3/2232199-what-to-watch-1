export type Film ={
  id: number;
  title: string;
  posterUrl: string;
  backgroundUrl: string;
  genre: string;
  releaseDate: number;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  description: string;
  videoUrl: string;
  timeValue: string;
  reviews: FilmReview[];
};

export type FilmReview = {
  id: number,
  rating: number,
  author: string,
  date: string,
  text: string
};

