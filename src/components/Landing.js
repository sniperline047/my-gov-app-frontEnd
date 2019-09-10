import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Logo from './Logo';
import Carousel from './Carousel';
import Footer from './Footer'; 
import NavBar from './NavBar'; 

const useStyles = makeStyles(theme => ({
  root: {
  	height: '80%',
  	width: '100%',
  },
  header: {
  	height: '10%',
  },
  logoSection: {
  	height: '20%',
  	display: 'flex',
  },
  carouselSection: {
  	display: 'flex',
    justifyContent: 'center',
  	height: '60%',
  },
  buttonSection: {
  	height: '20%',
  	padding: '20px'
  }, 
  footer: {
	height: '10%',
  },
}));

function Landing() {

	const classes = useStyles();

	return(
		<div>
			<div className={classes.header}>
				<Header />
			</div>
			<div className={classes.root}>
				<div className={classes.logoSection}>
					<div className="w-20">
						<Logo />
					</div>
					<div className="w-60 hide font">
						<h1 className="tc" >Welcome Officer!</h1>
						<h2 className="tc" >
							"Welcome to Inter-Connecting Punjab government portal.
							An official Web-App that provides access to information within the departments."
						</h2>
					</div>
					<div className="w-15 right-0 fixed">
						<NavBar />
					</div>
				</div>
				<div className={classes.carouselSection}>
					<Carousel />
				</div>
				<div className={classes.buttonSection}>
					<Link to="/register">
					 	<Button variant="contained" color="primary" >
	     					Continue!
						</Button>
					</Link>
				</div>
			</div>
			<div className={classes.footer}>
	      		<Footer />	
			</div>
		</div>
	);
}

export default Landing;
