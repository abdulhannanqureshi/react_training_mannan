import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { seriesRequest } from '../../../redux/action';
import { Container } from 'react-bootstrap';
import VideoComponent from '../../components/VideoComponent';
const Series = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seriesRequest());
  }, [dispatch]);
  const { series, isLoaded } = useSelector((state) => state.seriesReducer);
  return (
    <Container className='series-wrapper'>
      <h2 className='title text-center'>Popular Series</h2>
      <VideoComponent videoDetails={series}  isLoaded={isLoaded}  />
    </Container>
  );
};

export default Series;
