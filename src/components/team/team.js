import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import FrancescoFerraro from "../../images/francesco-ferraro.jpg"
import MatheusKerpen from "../../images/matheus-kerpen.png"

const Team = () => (
    <Container id="team" style={{ width: '80%', maxWidth: '1200px', textAlign: 'center', marginTop: '32px', paddingBottom: '56px'}}>
        <h3>Quem somos</h3>
        <Row style={{  display: `flex`, marginTop: '32px', alignItems: 'center' }}>
            <Col lg={6}>
                <Container style={{width: '250px', marginBottom: '24px'}}>
                    <Image src={FrancescoFerraro} roundedCircle style={{width: '150px'}}></Image>
                    <h4 style={{padding: '8px 0px 4px'}}>Francesco Ferraro</h4>
                    <p style={{ fontSize: '14px'}}>Engenheiro de software</p>
                </Container>
            </Col>
            <Col lg={6} style={{textAlign: 'center'}}>
                <Container style={{width: '250px', marginBottom: '24px' }}>
                  <Image src={MatheusKerpen} roundedCircle style={{width: '150px'}}></Image>
                    <h4 style={{padding: '8px 0px 4px'}}>Matheus Kerpen</h4>
                    <p style={{ fontSize: '14px'}}>Designer de soluções digitais</p>
                </Container>
            </Col>
        </Row>
    </Container>
)

export default Team