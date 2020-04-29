import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Footer extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
             <footer className="mt-5">
               <Container fluid={true}>
                 <Row className="border-top justify-content-between p-3">
                   <Col className="p-0 d-flex md={3} sm={12}">
                   <b>React Project</b>
                   </Col>
                   <Col className="p-0 d-flex justify-content-end md={3}">
                   <b><i>This is a website using ReactJS.</i></b>
                   </Col>
                  </Row>
               </Container>
             </footer>
		)};
	}

export default Footer;