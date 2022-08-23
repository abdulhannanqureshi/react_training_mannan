import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesRequest } from '../../../redux/action';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MoviesComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesRequest());
  }, [dispatch]);
  const { movies } = useSelector((item) => item.moviesReducer);
  const [loadMore, setLoadMore] = useState(21);
  return (
    <Container className='series-wrapper'>
      <h2 className='title text-center'>Popular Movies</h2>
      <Row className='justify-content-center'>
        {movies
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
                    alt='Movies'
                  />
                  <h3 className='sub-title'>{item.title}</h3>
                </div>
              </Col>
            ) : null
          )}
      </Row>
      {movies.length > loadMore ? (
        <div className='text-center mt-4'>
          <Button
            onClick={() => setLoadMore(loadMore + 7)}
            className='common-btn'
          >
            Load More
          </Button>
        </div>
      ) : null}
    </Container>
  );
};
export default MoviesComponent;
