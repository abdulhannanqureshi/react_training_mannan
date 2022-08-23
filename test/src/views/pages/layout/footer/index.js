import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import FaceBookIcon from '../../../../assets/img/social/facebook-white.svg';
import TwitterIcon from '../../../../assets/img/social/twitter-white.svg';
import InstagramIcon from '../../../../assets/img/social/instagram-white.svg';
import AppStoreIcon from '../../../../assets/img/store/app-store.svg';
import PlayStoreIcon from '../../../../assets/img/store/play-store.svg';
import WIndowStoreIcon from '../../../../assets/img/store/windows-store.svg';

const Footer = () => {
return (
<footer className={styles.footerWrapper}>
  <Container fluid='lg'>
    <Row>
      <Col md={12}>
      <ul className={styles.footerList}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Terms and Conditions</Link>
        </li>
        <li>
          <Link to='/'>Privacy Policy</Link>
        </li>
        <li>
          <Link to='/'>Collection Statements</Link>
        </li>
        <li>
          <Link to='/'>Help</Link>
        </li>
        <li>
          <Link to='/'>Manage Account</Link>
        </li>
      </ul>
      <div>Copyright@2016 DEMO Streaming. All Rights Reserved.</div>
      </Col>
    </Row>
    <Row className='mt-4 mt-md-5 align-items-center'>
      <Col md={4}>
      <div className={styles.socialWrapper}>
        <Link to='/'>
        <img src={FaceBookIcon} alt='Facebook' />
        </Link>
        <Link to='/'>
        <img src={TwitterIcon} alt='Twitter' />
        </Link>
        <Link to='/'>
        <img src={InstagramIcon} alt='Instagram' />
        </Link>
      </div>
      </Col>
      <Col md={8}>
      <div className={styles.storeWrapper}>
        <Link to='/'>
        <img src={AppStoreIcon} alt='App Store' />
        </Link>
        <Link to='/'>
        <img src={PlayStoreIcon} alt='Play Store' />
        </Link>
        <Link to='/'>
        <img src={WIndowStoreIcon} alt='Window Store' />
        </Link>
      </div>
      </Col>
    </Row>
  </Container>
</footer>
);
};

export default Footer;