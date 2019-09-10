import React from 'react';
import imgRight from '../images/startup-Logo.png';
import imgLeft from '../images/conversation.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	header: {
		maxHeight: '75px',
	  	display: 'flex',
		position: 'relative',	
		top: '0',
		width: '100%',
		backgroundColor: '#3f49b5',
		textAlign: 'center',
		borderRadius: '25px',
		alignItems: 'center',
	},
	img: {
		backgroundColor: 'white',
		borderRadius: '25px',
		width: '60px',
		height: '60px',
	},
	text1: {
		color: 'white',
		marginLeft: '15px',
		fontSize: '25px',
		textAlign: 'left',
	},
	text2: {
		color: 'white',
		marginRight: '15px',
		fontSize: '25px',
		textAlign: 'right',
	},
}));

export default function Header() {

	const classes = useStyles();

	return(
		<div className={classes.header}>
	        <div className="w-50 flex br b--white">
	        	<p className={classes.text1}>
	        		STARTUP PUNJAB
	    		</p>
	    		<img className={classes.img} src={imgRight} alt="Main Logo"/>
	        </div>
	        <div className="w-50">
	        	<p className={classes.text2}>
	        		<img className={classes.img} src={imgLeft} alt="Main Logo"/> 
	    			myGovApp
	        	</p>
	        	
	    	</div>
		</div>
	);
}