import React, {  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/About';
import Portfolio from './Component/Portfolio';
import ContactUs from './Component/Contact';
import Header from './Component/Navbar';
import Footer from './Component/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: {
        title: 'Hi! I\'m Raksha',
        subTitle: 'I love building THINGS!!!',
        ask: 'Fresh ENGINEER'
      },
       About: {
        title: 'Who Am I?',
      },
       Contact: {
        title: 'Let\'s Talk'
      },
       Portfolio: {
        title: 'Give it a look to know more about me'
      }
    }
  }
  render(){
     return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path = "/" render={props => 
  (<Home title={this.state.home.title}
    subTitle={this.state.home.subTitle}
    ask={this.state.home.ask}
    />)
} />
      <Route exact path = "/About" render={props => (
        <AboutUs title={this.state.About.title} />) }/> 
      <Route exact path = "/Portfolio" component = {Portfolio} />
      <Route exact path = "/Contact" render={props => (
        <ContactUs title={this.state.Contact.title}/>)
    } />
      </Switch>      
      <Footer /> 
    </div>
    </Router>
  )};
}

export default App;
