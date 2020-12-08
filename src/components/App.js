import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios
      .get('/api')
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(err.message))
  })

  return (
    <div>
      <h1>JAMES FERRELL</h1>
    </div>
  )
}

export default App;
