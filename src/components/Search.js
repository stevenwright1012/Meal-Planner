import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import {getUser} from '../ducks/reducer';
import {connect} from 'react-redux'

class Search extends Component {
  constructor(){
    super()

    this.state = {
      value: '',
    }
  }
  componentDidMount(){
    this.props.getUser()    
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
    console.log(this.props.user);
    
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
 function mapStateToProps(state){
   return {
     user: state.user
   }
 }

export default connect(mapStateToProps, {getUser})(Search);