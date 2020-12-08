import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'


const App = () => {
  useEffect(() => {
    axios
      .get('/api/menu')
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err.message))
  })

  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to Codesmith Cafe!</h1>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App;
