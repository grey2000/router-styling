import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  const styles = {
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
    },
    navigationList: {
      listStyle: 'none',
      padding: 0,
    },
  }
  return (
    <>
      <Container>
        <footer style={styles.footer}>
          <div>
            <h3>Contact Us</h3>
            <p>Email: example@email.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          
          <div>
            <h3>Navigation</h3>
            <ul style={styles.navigationList}>
              <li><a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a></li>
              <li><a href="/about" style={{ textDecoration: "none", color: "black" }}>About Us</a></li>
              <li><a href="/services" style={{ textDecoration: "none", color: "black" }}>Services</a></li>
              <li><a href="/contact" style={{ textDecoration: "none", color: "black" }} >Contact</a></li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  )
}
