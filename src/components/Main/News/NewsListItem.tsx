import React from 'react';
import { CategoryNewsObjType } from 'src/modules/types';

interface INewsListItem {
  news: CategoryNewsObjType;
}

const NewsListItem = ({ news }: INewsListItem) => {
  return (
    <div>
      {/* <img src={news.urlToImage} alt="" /> */}
      <div>{news.title}</div>
      <div>{news.description}</div>
    </div>
  );
};

export default NewsListItem;
