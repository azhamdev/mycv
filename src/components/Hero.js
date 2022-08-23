import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

// Styling 
import Styles from '../styles/hero.module.css';

// Images 
import gambar from '../assets/imageProfile.png';
import Gap from './Gap';

const Hero = () => {
  return (
    <div>
      <Container className={Styles.backgroundHero}  >
        <div id="whoami">
          <Gap height={50} />
        </div>
        <Row className={Styles.wrapper}>
          <Col lg="7" className={Styles.title}>
            <div>
              <h1 className={Styles.welcome}>
                Hello, {<br></br>}
                i’m <span>Azham</span>,{<br></br>}
                front end developer
              </h1>
              <p className={Styles.desc}>
                React js / Vue js / React Native / UIUX
              </p>
              <div className={Styles.btnWrapper}>
                <div className={Styles.btnContent}>
                  <Button className={Styles.buttonCTA}>Contact Me</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='5' sm="12" >
            <div className={Styles.imageWrapper}>
              <img className={Styles.imageHero} src={gambar} />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Hero;
