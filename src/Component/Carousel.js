import React,{ Component } from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iq from '../assets/images/iq.png';
import mq from '../assets/images/mq.jpg';
import fq from '../assets/images/fq.jpg';
import sq from '../assets/images/sq.jpg';
import iq3 from '../assets/images/iq3.png';
import iq1 from '../assets/images/iq1.png';
import lq from '../assets/images/lq.png';
import mq1 from '../assets/images/mq1.jpeg';

class Carousel extends Component {
constructor(props){
	super(props);
	this.state = {
		items: [
		{
			id:0,
			title:'Inspirational Quotes',
            imgSrc: iq,
            selected: false	
		},
		{
			id:1,
			title:'Motivational Quotes',
            imgSrc: mq,
            selected: false	
		},
		{
			id:2,
			title:'Funny Quotes',
            imgSrc: fq,
            selected: false	
		},
		{
			id:3,
			title:'Inspirational Quotes',
            imgSrc: sq,
            selected: false	
		},
		{
			id:4,
			title:'Meaningful Quotes',
            imgSrc: iq3,
            selected: false	
		},
		{
			id:5,
			title:'Thoughtful Quotes',
            imgSrc: iq1,
            selected: false	
		},
		{
			id:6,
			title:'Deep Quotes',
            imgSrc: lq,
            selected: false	
		},
		{
			id:7,
			title:'Life Quotes',
            imgSrc: mq1,
            selected: false	
		}
      ]
    }
}

handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} Click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
