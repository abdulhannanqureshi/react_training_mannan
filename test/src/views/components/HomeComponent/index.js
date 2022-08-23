import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { AppRoutes } from '../../../routing/appRoutes';

const HomeComponent = () => {
  return (
    <div className='custom-wrapper'>
      <h2 className='title text-center mb-4'>Series & Movies</h2>
      <Row>
        <Col sm={6}>
          <Link className={styles.innerCard} to={AppRoutes.SERIES}>
            <div>
              <h2>SERIES</h2>
            </div>
            <p>Popular Series</p>
          </Link>
        </Col>
        <Col sm={6}>
          <Link className={styles.innerCard} to={AppRoutes.MOVIES}>
            <div>
              <h2>MOVIES</h2>
            </div>
            <p>Popular Movies</p>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default HomeComponent;
