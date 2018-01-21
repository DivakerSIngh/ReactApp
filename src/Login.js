import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
  render() {
    return (
      <section class="portfolio partialView" id="portfolio">
      <div class="container">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Login</h1>
        </header>
      </div>
      </div>
      </section>
    )
  }
}
ReactDOM.render(<Login/>,document.getElementById('root'));