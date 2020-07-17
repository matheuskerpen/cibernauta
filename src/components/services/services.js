import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./services.css"

 const Services = () => (
     <Container id="services" style={{ width: '80%', maxWidth: '1200px'}}>
         <h3>Entenda como podemos ajudar você</h3>
         <Row>
             <Col lg={6}>
                <div className="service-card">
                    <h4>Presença digital</h4>
                    <p>Sua empresa ainda não tem um site ou precisa de uma atualização?</p>
                    <p>Nós usamos um stack moderno para publicar sites com gerenciador de conteúdo (CMS), 
                        rankeamento otimizado
                         e sem custo de hospedagem.</p>
                    <p>Com um pequeno investimento, você apresenta sua empresa de forma profissional na 
                        internet e mantém seu site no ar sem nenhum custo fixo.</p>
                    <AnchorLink to="/#contact" title="">
                        <Button className="float-right" variant="outline-danger" style={{
                                marginTop: '8px',
                                fontFamily: 'Ubuntu',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '12px'
                                }}>
                            Saiba mais
                        </Button>
                    </AnchorLink>
                </div>
                <div className="service-card">
                    <h4>Produto digital - SaaS</h4>
                    <p>Possui uma ideia de negócio digital ou precisa desenvolver um software para sua empresa?</p>
                    <p>Nós te ajudamos a viabilizar esse projeto.</p>
                    <AnchorLink to="/#contact" title="">
                        <Button className="float-right" variant="outline-danger" style={{
                                marginTop: '8px',
                                fontFamily: 'Ubuntu',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '12px'
                                }}>
                            Saiba mais
                        </Button>
                    </AnchorLink>
                </div>
             </Col>
             <Col lg={6}>
                <div className="service-card">
                    <h4>UX Planning</h4>
                    <p>Seu projeto precisa de refinamento ou ainda não está pronto para o desenvolvimento?</p>
                    <p>Realizamos algumas dinâmicas para definição de objetivos, pesquisa, concepção, design e teste.</p>
                    <p>Utilizamos uma metodologia inspirada no Design Sprint e adaptada para a necessidade 
                        de cada cliente para transformar sua ideia em um protótipo.</p>
                    <p>O UX Planning é utilizado para validar sua ideia e aprovar o layout das telas antes de iniciar o desenvolvimento.</p>
                    <AnchorLink to="/#contact" title="">
                        <Button className="float-right" variant="outline-danger" style={{
                                marginTop: '8px',
                                fontFamily: 'Ubuntu',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '12px'
                                }}>
                            Saiba mais
                        </Button>
                    </AnchorLink>
                </div>
                <div className="service-card">
                    <h4>Consultoria</h4>
                    <p>Como podemos te ajudar?</p>
                    <p>Compartilhamos nosso conhecimento, ajudamos na tomada de decisões estratégicas 
                        e desenvolvemos soluções de software específicas.</p>
                    <AnchorLink to="/#contact" title="">
                        <Button className="float-right" variant="outline-danger" style={{
                                marginTop: '8px',
                                fontFamily: 'Ubuntu',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '12px'
                                }}>
                            Saiba mais
                        </Button>
                    </AnchorLink>
                </div>
             </Col>
         </Row>
     </Container>
 )

export default Services