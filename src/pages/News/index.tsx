import { useState } from 'react';
import { news, NewsItem } from '../../content';
import { Modal } from '../Modal';

export const News = (): JSX.Element => {
  const currentDate: Date = new Date();

  // Filter out expired news
  const validNews: NewsItem[] = news.filter(
    (item) => new Date(item.expiryDate) > currentDate,
  );

  // Modal state
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="news__none">
      {validNews.length === 0 ? (
        <p>Momentálně nemáme žádné aktuality.</p>
      ) : (
        validNews.map((item) => (
          <div className="news__item" key={item.id}>
            <h3>{item.title}</h3>
            <div>{item.body}</div>
            {item.modal && (
              <>
                <button className="button" onClick={() => setModal(true)}>
                  Zobrazit více
                </button>
                <Modal openModal={modal} closeModal={() => setModal(false)}>
                  {item.modal}
                </Modal>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};
