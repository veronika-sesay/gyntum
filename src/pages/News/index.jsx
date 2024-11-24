import React from 'react';
import { news } from '../../content';

export const News = () => {
  const currentDate = new Date();

  // Filter out expired news
  const validNews = news.filter(
    (item) => new Date(item.expiryDate) > currentDate,
  );

  return (
    <div>
      {validNews.length === 0 ? (
        <p>Momentálně nemáme žádné aktuality.</p>
      ) : (
        validNews.map((item) => (
          <div className="news__item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
