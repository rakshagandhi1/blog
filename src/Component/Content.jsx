import React,{ Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Content extends Component {
 constructor(props){
 super(props);
 }
	render() {
	return (
	         <div>
	         <Container fluid={true}>
	         <Row className="justify-content-center content">
	         <Col md={8}>
	         Hello!! I'm Raksha Gandhi. I'm from Bhilwara,Rajasthan. I have completed B.tech in Information Technolgy from Manikya Lal Verma textile & engineering College,Bhilwara in 2019.<br />
	         I have done my internship from <span className="highlight">Yashraj Creations,Bhilwara</span> in Web development.<br />
	         I have 4 Months of experience as a web developer intern from <span className="highlight">TakeTwoTechnologies,Bhilwara.</span><br />
	         I have knowledge of these skills: Html,Css,Bootstrap,JavaScript,ReactJs,NodeJS,MongoDB,Php,MySQL.<br />
	         I love watching movies,listening songs.
	         </Col>
	         </Row>
	         <br />
	         <br />
	          <Button className="d-inline-block btn">
                            Let's Connect
                        </Button>
	         </Container>
	         <br />
	       
	         <a
  href="https://www.facebook.com/raksha.gandhi.77"
  className="social"
>
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>
<a
  href="https://www.instagram.com/raksha_gandhi/"
  className="social"
>
  <FontAwesomeIcon icon={faInstagram} size="3x" />
</a>
<a
  href="https://github.com/rakshagandhi1"
  className="social"
>
  <FontAwesomeIcon icon={faGithub} size="3x" />
</a>
<a
  href="https://www.linkedin.com/in/raksha-gandhi-947238180/"
  className="social"
>
  <FontAwesomeIcon icon={faLinkedin} size="3x" />
</a>
	  </div>
	)}
}

export default Content;