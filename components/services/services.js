import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

import "./services.css"

 const Services = () => (
     <Container id="services" style={{ width: '80%', maxWidth: '1200px'}}>
         <h3>Entenda como podemos ajudar você</h3>
         <Row>
             <Col lg={6}>
                <div className="service-card">
                    <h4>UX Planning</h4>
                    <p>Dinâmica para definição de objetivos, pesquisa, concepção, design e teste.</p>
                    <p>Utilizamos uma metodologia inspirada no Design Sprint e adaptada para a necessidade de cada cliente.</p>
                    <Button className="float-right" variant="outline-danger" style={{
                            marginTop: '8px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '12px'
                            }}>
                        Saiba mais
                    </Button>
                </div>
                <div className="service-card">
                    <h4>Consultoria</h4>
                    <p>Tem dúvidas em relação a complexidade de criar um produto digital? Precisa de ajuda para reavaliar o seu produto?</p>
                    <p>Podemos contribuir compartilhando nosso conhecimento e ajudando na tomada de decisões estratégicas.</p>
                    <Button className="float-right" variant="outline-danger" style={{
                            marginTop: '8px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '12px'
                            }}>
                        Saiba mais
                    </Button>
                </div>
             </Col>
             <Col lg={6}>
                <div className="service-card">
                    <h4>Presença digital</h4>
                    <p>Sua empresa ainda não tem um site ou precisa de uma atualização?</p>
                    <p>Nós usamos um stack moderno, com gerenciador de conteúdo, rankeamento otimizado
                         no google e nenhum custo de hospedagem.</p>
                    <p>Com um pequeno investimento, você apresenta sua empresa de forma profissional na internet.</p>
                    <Button className="float-right" variant="outline-danger" style={{
                            marginTop: '8px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '12px'
                            }}>
                        Saiba mais
                    </Button>
                </div>
                <div className="service-card">
                    <h4>Produto digital</h4>
                    <p>Tem dúvidas em relação a complexidade de criar um produto digital? Precisa de ajuda para reavaliar o seu produto?</p>
                    <p>Podemos contribuir compartilhando nosso conhecimento e ajudando na tomada de decisões estratégicas.</p>
                    <Button className="float-right" variant="outline-danger" style={{
                            marginTop: '8px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '12px'
                            }}>
                        Saiba mais
                    </Button>
                </div>
             </Col>
         </Row>
     </Container>
 )

export default Services