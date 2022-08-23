import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { moviesRequest } from '../../../redux/action';
import { Container } from 'react-bootstrap';
import VideoComponent from '../../components/VideoComponent';
const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesRequest());
  }, [dispatch]);
  const { movies, isLoaded } = useSelector((state) => state.moviesReducer);
  return (
    <Container className='series-wrapper'>
      <h2 className='title text-center'>Popular Movies</h2>
      <VideoComponent videoDetails={movies}  isLoaded={isLoaded}  />
    </Container>
  );
};

export default Movies;
