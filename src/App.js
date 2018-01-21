import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import '../../freelancer.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
       <Router>
          <div>
            
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
  <img class="logo" src={logo}/>
    <div class="navbar-header">
    
      <a class="navbar-brand">React</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to={'/'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Home</a></Link></li>
      <li class="active"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" data-toggle="modal" data-target="#myModal">Login</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><Link to={'/login'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home1</a></Link></li>
          <li><Link to={'/'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home2</a></Link></li>
          <li><Link to={'/login'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home3</a></Link></li>
        </ul>
      </li>
      <li><Link to={'/'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home</a></Link></li>
      <li><Link to={'/'}> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home</a></Link></li>
    </ul>
  </div>
</nav>
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
      <div class="container">
    	<div class="x">
    	    <div class="col-xs-4">
        	    <div class="form-wrap">
                <h3>Log in with your email account</h3>
                    <form role="form" action="javascript:;" method="post" id="login-form" autocomplete="off">
                        <div class="form-group">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email" id="email" 
                            class="form-control" placeholder="somebody@example.com"/>
                        </div>
                        <div class="form-group">
                            <label for="key" class="sr-only">Password</label>
                            <input type="password" name="key" id="key" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="checkbox">
                            <span class="character-checkbox" onclick="showPassword()"></span>
                            <span class="label">Show password</span>
                        </div>
                        <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block reactBtn" value="Log in"/>
                    </form>
                    <a href="javascript:;" class="forget" data-toggle="modal" data-target=".forget-modal">
                    Forgot your password?</a>
                   
        	    </div>
    		</div> 
    	</div>
    </div> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
            
             
             <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
             </Switch>
          </div>
       </Router>
    );
 }
}

export default App;
