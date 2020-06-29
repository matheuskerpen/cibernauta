import React, { useState }   from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
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
        console.log(formState)
    }

    return (
    <div id="contact" style={{background: '#fff', width: '100%'}}>
        <Container style={{ width: '80%', maxWidth: '1200px', height: '400px'}}>
            <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" onChange={handleChange} value={formState.name} placeholder="Name"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" onChange={handleChange} value={formState.email} placeholder="Email"/>
                <button type="submit">Submit</button>
            </form>
        </Container>
    </div>
)}

export default Contact