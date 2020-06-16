import React from 'react'

export default function Footer() {
    return (
    <footer style={{
        width: `100%`,
        height: `60px`,
        position: `absolute`,
        backgroundColor: `#1A151F`,
        display: `block`,
        textAlign: `center`
    }}>
        © {new Date().getFullYear()}, cibernauta
    </footer>
    )
}
