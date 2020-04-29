import React,{ Component } from 'react';
import './style.css';
import Content from './Content';

class AboutUs extends Component {
 constructor(props){
 super(props);
 }
	render() {
	return (
	         <div  className="img">
	         <h1 className="topic">{this.props.title}</h1>
	         <Content />
	         </div>
	)}
}

export default AboutUs;