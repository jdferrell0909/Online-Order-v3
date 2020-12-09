import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'
import HomeScreen from '../screens/HomeScreen.js';
import NewItem from '../screens/NewItem.js'


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
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/newItem' component={NewItem} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
