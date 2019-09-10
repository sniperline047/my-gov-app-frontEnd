import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Logo from './Logo';
import jwt_decode from 'jwt-decode';
import Chatroom from './Chatroom';
import Store from './Store';

export default class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
			username: '',
		}
	}

	componentDidMount() {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			first_name: decoded.First_Name,
			last_name: decoded.Last_Name,
			username: decoded.Username,
		})
	}
	
	render() {	
		return(
			<div>
				<div className="h-10">
					<Header />
				</div>
				<div className="h-10 flex">
					<div className="w-20">
						<Logo />
					</div>
					<div className="w-60">
						<h1 className="tc" >{`Welcome "${this.state.username.toUpperCase()}"`}</h1>
					</div>
					<div className="w-15 right-0 fixed">
						<NavBar />
					</div>
				</div>
				<div className="h-70 center w-100">
					<Store profile = {this.state.username} >
						<Chatroom />
					</Store>
				</div>
				<div className="h-10 pt6">
					<Footer />
				</div>
			</div>
		);
	}
}