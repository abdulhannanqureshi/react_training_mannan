import React, { useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Menu from '../../../../assets/img/icon/menu.png';
import { AppRoutes } from '../../../../routing/appRoutes';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const menuToggle = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <>
      <header className={styles.headerWrapper}>
        <Container fluid='lg'>
          <Row>
            <Col>
              <h1 className={styles.logoWrapper}>
                <Link to={AppRoutes.HOME}>Streaming</Link>
              </h1>
            </Col>
            <Col
              className={`${styles.loginWrapper} ${
                menuStatus ? styles.on : ''
              }`}
            >
              <div>
                <Link to={AppRoutes.HOME}>Log in</Link>
                <Button className='common-btn'>Start Your free trial</Button>
              </div>
            </Col>
            <Col className={styles.menuWrapper}>
              <button onClick={() => menuToggle()}>
                <img src={Menu} alt='Menu' />
              </button>
            </Col>
          </Row>
        </Container>
      </header>
      <div className={styles.navbarWrapper}>
        <Container fluid='lg'>
          <Row>
            <Col md={12}>
              <Nav>
                <Link to={AppRoutes.HOME}>Home</Link>
                <Link to={AppRoutes.SERIES}>Series</Link>
                <Link to={AppRoutes.MOVIES}>Movies</Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
