
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: 'string',
    name: 'string',
    age: Number,
    favoriteMovies: []
  }

  render() {
    return (
      <div>
        <div className='name'>
          <input>name</input>

        </div>
        <div className='age'>
          <input>age</input>



        </div>
        <div className='movie'>
          <input>fav movie</input>



        </div>





      </div>
    )
  }
}

export default App

