import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <>
      <Container className={Styles.backgroundHero}>
        <Row className={Styles.wrapper}>
          <Col lg="7">
            <div>
              <h1 className={Styles.welcome}>
                Hello, {<br></br>}
                i’m <span>Azham</span>,{<br></br>}
                front end developer
              </h1>
              <p className={Styles.desc}>
                React js / Vue js / React Native
              </p>
              <Button className={Styles.buttonCTA}>Contact Me</Button>
            </div>
          </Col>
          <Col lg='5'>2</Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
