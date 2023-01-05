import { Component } from "react";
import "./Card.css"

export class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.description}</p>
					<p className="card-text">{this.props.date}</p>
					<p className="card-text">{this.props.finished}</p>
				</div>
			</div>
		);
	}
}
