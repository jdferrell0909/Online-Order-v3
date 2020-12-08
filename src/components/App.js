import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'
import HomeScreen from '../screens/HomeScreen.js';


const App = () => {
  let products;
  useEffect(() => {
    axios
      .get('/api/menu')
      .then(response => {
        products = response.data;
      })
      .catch(err => console.log(err.message))
  })

  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App;
