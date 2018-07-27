import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class Search extends Component {
  constructor(){
    super()

    this.state = {
      value: '',
    }
  }
  handleInput(e){
    this.setState({
      value: e
    })
  }
  handleButton(){
    const {REACT_APP_API_ID, REACT_APP_API_KEY} = process.env
    axios.get(`https://api.edamam.com/search?q=${this.state.value}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`).then(res => {
      console.log(res.data);
    })
  }
  render() {
    // console.log(process.env);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" onChange={(e) => this.handleInput(e.target.value)}/>
        <button onClick={() => this.handleButton()}>search</button>
      </div>
    );
  }
}

export default Search;