import React, { Component } from 'react';
import CardInfo from './CardInfo';

class Card extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
          <div className="d-inline-block g-card" onClick={(e)=>this.props.Click(this.props.item)}>
            <img className="g-card-image" src={this.props.item.imgSrc} />
            {this.props.item.selected && <CardInfo title={this.props.item.title} /> }
          </div>
		)
	}
}

export default Card;