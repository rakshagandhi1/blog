import React,{ Component } from 'react';
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from './Carousel';

class Home extends Component {
 constructor(props){
    super(props);
  }
	render() {
	return (
	         <div>
	         <Jumbotron className="bg-transparent jumbotron-fluid p-0">
	          <Container fluid={true}>
                 <Row className="justify-content-center py-5">
                   <Col md={8} sm={12}>
                   <h2 className="display-2 font-weight-bolder title">{this.props.title}</h2>
                   <h4 className="display-4 font-weight-light subtitle">{this.props.subTitle}</h4>
                   <h4 className="lead font-weight-light ask">{this.props.ask}</h4>
                   </Col>
                   </Row>
              </Container>
	         </Jumbotron>
	         <Carousel />
	         </div>
	)}
}

export default Home;