import React, {Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class Vendor extends Component{
  
	constructor(props) {
		super(props);
		this.state = {
            username: this.props.location.user
        }
	}

	showWaitProducts = () => {
		this.props.history.push({
			pathname:'/login/vendor/waitproducts',
			user: this.state.username
		});
	}
	
	showReadyProducts = () => {
		this.props.history.push({
			pathname:'/login/vendor/readyproducts',
			user: this.state.username
		});
	}

	showCanceledProducts = () => {
		this.props.history.push({
			pathname:'/login/vendor/canceledproducts',
			user: this.state.username
		});
	}

	showDispatchedProducts = () => {
		this.props.history.push({
			pathname:'/login/vendor/dispatchedproducts',
			user: this.state.username
		});
	}

	showProducts = () => {
		this.props.history.push({
			pathname:'/login/vendor/products',
			user: this.state.username
		});
	}
  
	createProduct = () => {
		this.props.history.push({
			pathname:'/login/vendor/create',
			user: this.state.username
		});
	}

	render() {
		return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
				<li className="navbar-item">
					<button type="button" onClick={this.showProducts}>Show All Products</button>
				</li>
				<li className="navbar-item">
					<button type="button" onClick={this.showWaitProducts}>Show Waiting Products</button>
				</li>
				<li>
					<button type="button" onClick={this.showReadyProducts}>Show Ready Products</button>
				</li>
				<li>
					<button type="button" onClick={this.showDispatchedProducts}>Show Dispatched Products</button>
				</li>
				<li>
					<button type="button" onClick={this.showCanceledProducts}>Show Canceled Products</button>
				</li>
				<li className="navbar-item">
					<button type="button" onClick={this.createProduct}>Create Products</button>
				</li>
				</ul>
			</div>
			<div>
				{this.state.username}
            </div>
			</nav>
			<br/>
		</div>
		)
	}
}