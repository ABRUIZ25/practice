
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: 'string',
    name: 'string',
    age: Number,
    favoriteMovies: 'string',
    log: []

  }

  NewName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  NewAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  NewName = (event) => {
    this.setState({
      favoriteMovies: event.target.value
    })
  }
  HandleOnClick = () => {
    const updatelog = {
      name: this.state.name,
      age: this.state.age,
      favoriteMovies: this.state.favoriteMovies
    }
    this.setState({
      log: [...this.state.log, updatelog]
    })

  }

  render() {
    return (
      <div>
        <div className='name'>name</div>
        <input name='nameinput'></input>

        <div className='age'>age</div>
        <input name='age'></input>


        <div className='movie'>fav movie</div>
        <input name='movie'></input>

        <div>
          <button>submit</button>
        </div>

        <div>log</div>



      </div>
    )
  }
}

export default App

