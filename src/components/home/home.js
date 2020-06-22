import React from "react"

import { Container, Row, Col, Image, Button} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"

import homeImage from "../../images/home-image.png"

const Home = () => (
  <div id="home">
    <Container style={{  display: `flex`, width: '80%', maxWidth: '1200px'}}>
      <Row>
        <Col xs={12} sm={12} md={7} lg={7}>
          <div style={{margin: `4em 0em`}}>
            <h1 style={{paddingBottom: `.2em`}}>É HORA DE DAR VIDA AO SEU PROJETO</h1>
            <h2 style={{paddingBottom: `1.2em`}}>Desenvolvemos produtos digitais utilizando as melhores tecnologias do mercado</h2>
            <Button variant="danger" style={{
              padding: '12px 16px', 
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '12px'
              }}>
                Entre em contato
              </Button>
          </div>
        </Col>
        <Col className="d-none d-md-block" md={5} lg={5} >
          <Image src={homeImage} alt="home-image" fluid style={{margin: `1em 0em`}}/>
          <a className="float-right" href="https://absurd.design" target="_blank" rel="noreferrer">absur.design</a>
        </Col> 
      </Row>
    </Container>
  </div>
  
)

export default Home
