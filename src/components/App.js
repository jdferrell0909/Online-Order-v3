import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'
import HomeScreen from '../screens/HomeScreen.js';
import NewItem from '../screens/NewItem.js';
import UpdateItem from '../screens/UpdateItem.js';

const App = () => {
  
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/newItem' component={NewItem} />
          <Route path='/updateItem/:id' component={UpdateItem} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
