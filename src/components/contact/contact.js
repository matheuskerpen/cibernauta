import React, { useState }   from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import PhoneInput from '../PhoneInput'
import TextField from '@material-ui/core/TextField'

const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        e.preventDefault();
        setFormState({
                name: "",
                email: "",
                phone: "",
                message: ""   
        });
    }

    return (
    <div id="contact" style={{background: '#fff', width: '100%'}}>
        <Container style={{ width: '80%', maxWidth: '1200px', paddingTop:'32px', paddingBottom:'32px'}}>
            <Form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <h3 style={{ fontWeight: 'bold', color: '#1A151F', fontSize: '24px', paddingBottom: '24px'}}>Entre em contato com a gente</h3>
                <Row>
                    <Col lg={6}>
                        <TextField
                            id="name" 
                            variant="outlined" 
                            name="name"
                            label="Nome"
                            required={true}
                            fullWidth={true}
                            onChange={handleChange} 
                            value={formState.name} 
                            placeholder="Como gosta de ser chamado?"
                            style={{ paddingBottom: '24px'}} 
                        />
                        <TextField
                           id="email" 
                           name="email"
                           type="email"
                           required={true}
                           onChange={handleChange} 
                           value={formState.email} 
                           placeholder="Informe seu email"
                           fullWidth={true}
                           label="Email"
                           variant="outlined"
                           style={{ paddingBottom: '24px'}} 
                        />
                        <PhoneInput
                            id="phone" 
                            name="phone"
                            label="Telefone" 
                            variant="outlined"
                            required={false}
                            onChange={handleChange}
                            value={formState.phone} 
                            placeholder="(  )"
                            style={{ paddingBottom: '24px'}}
                        />
                    </Col>
                    <Col lg={6}>
                        <TextField
                            multiline
                            rows={6}
                            variant="outlined"
                            fullWidth={true}
                            label="Mensagem"
                            id="message" 
                            type="text"
                            name="message" 
                            required={true} 
                            onChange={handleChange} 
                            value={formState.message} 
                            placeholder="Como podemos te ajudar? Conte sobre o seu projeto"
                            style={{ paddingBottom: '24px'}}
                        />
                        <Button variant="danger" className="float-right" type="submit"
                            style={{
                                padding: '12px 16px', 
                                fontFamily: 'Ubuntu',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '12px',
                                minWidth: 100
                            }}>
                            Enviar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
)}

export default Contact