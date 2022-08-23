import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from './Card';
import Card from '../styles/card.module.css'

import reactNative from '../assets/reactNative.png'
import webCompany from '../assets/webCompanyProfile.png'
import webPendaftaran from '../assets/webPendaftaran.png'

const Projects = () => {
  return (
    <div>
      <Container >
        <Row className={Card.Container}>
          <Row style={{ padding: 31 }} className={Card.RowResponsive}>
            <h2 id='myprojects' style={{ fontWeight: 600, textAlign: 'center', marginBottom: 25 }}>My Projects</h2>
            <Col lg="4" md="12" sm='10'>
              <CardComponent title={"SecondHand"} desc={"Aplikasi untuk jual beli barang bekas, dibuat dengan React Native"} image={reactNative} />
            </Col>
            <Col lg="4" md="12" sm='10'>
              <CardComponent title={"Website Pendaftaran"} desc={"Website pendaftaran untuk Tegal Learning Center"} image={webPendaftaran} />
            </Col>
            <Col lg="4" md="12" sm='10'>
              <CardComponent title={"Company Profile"} desc={"Website Company Profile untuk UMKM Pucuk Daun Lestari"} image={webCompany} />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
