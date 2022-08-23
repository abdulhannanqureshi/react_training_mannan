import { useState } from 'react';
import {Row, Col, Button } from 'react-bootstrap';

const VideoComponent = ({series,isLoaded}) => {
  const [loadMore, setLoadMore] = useState(21);
  return (
      <>
      <Row className='justify-content-center'>
        {!isLoaded ? 'Loading...' : null}
        {series
          .sort((x, y) => {
            if (x.title < y.title) {
              return -1;
            }
            if (x.title > y.title) {
              return 1;
            }
            return 0;
          })
          .map((item, index) =>
            index < loadMore ? (
              <Col className='col-series' key={index}>
                <div className='inner-series'>
                  <img
                    className='series-poster'
                    src={item.images['Poster Art'].url}
                    alt='Series'
                  />
                  <h3 className='sub-title'>{item.title}</h3>
                </div>
              </Col>
            ) : null
          )}
      </Row>
      {series.length > loadMore ? (
        <div className='text-center mt-4'>
          <Button
            onClick={() => setLoadMore(loadMore + 7)}
            className='common-btn'
          >
            Load More
          </Button>
        </div>
      ) : null}
      </>
  );
};
export default VideoComponent;
