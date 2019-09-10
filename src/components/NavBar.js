import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Home from "../images/house.svg"; 
import Login from "../images/login.svg"; 
import Register from "../images/register.svg"; 
import User from "../images/man.svg"; 
import LogOut from "../images/exit.svg"; 

class NavBar extends React.Component {
	logOut = (event) => {
		event.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}

	render() {
		const loginRegisterLink = (
			<List>
	            <ListItem button>
	            	<Link to="/login">
	            		<img className="img" src={Login} alt="Login"/>
	            	</Link>
	            </ListItem>
	            <ListItem button>
	            	<Link to="/register">
	            		<img className="img" src={Register} alt="Register"/>
	            	</Link>
	            </ListItem>
            </List>
		)

		const userLink = (
			<List>
	            <ListItem button>
	            	<Link to="/profile">
	            		<img className="img" src={User} alt="User"/>
	            	</Link>
	            </ListItem>
	            <ListItem button>
	            		<img className="img" src={LogOut} alt="LogOut" onClick={this.logOut.bind(this)} />
	            </ListItem>
            </List>
		)

		return(
	        <div className="drawerPaper">
		        <div>
		        	<List>
			            <ListItem button>
			            	<Link to="/" >
			            		<img className="img" src={Home} alt="Home"/>
			            	</Link>
		            	</ListItem>
		        	</List>
		        	{localStorage.usertoken ? userLink : loginRegisterLink}
		    	</div>
	    	</div>
		);
	}
}

export default withRouter(NavBar);

		            // <ListItem button>
		            // 	<Link>
		            // 		<img className="img" src={Login} alt="Logo"/>
		            // 	</Link>
		            // </ListItem>
		            // <ListItem button >
		            // 	<Link>
		            // 		<img className="img" src={Register} alt="Register"/>
		            // 	</Link>
		            // </ListItem>