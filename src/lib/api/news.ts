import axios from 'axios';
import { CategoryType } from 'src/components/Main/News/types';

export const getNews = () =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  );

export const getNewsByCategory = (category: CategoryType) =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  );
