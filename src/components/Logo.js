import React from 'react';
import Tilt from 'react-tilt';
import logo from '../images/circular.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	Tilt: {
		paddingTop: '2px',
		margin: '8px',
		backgroundColor: "rgba(255,183,0,0.5)",
		border: '1px solid white',
	  	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  		borderRadius: '25px',
  		textAlign: 'center',
	},
}));

export default function() {

	const classes = useStyles();

	return(
		<div>
			<Tilt className={classes.Tilt} options={{ max : 90 }} style={{ height: 180, width: 180 }} >
				<div className="Tilt-inner">
			    	<img alt='logo' src={logo} height='120' width='120'  />
			    	<p>A new Iinitiative!</p>
				</div>
			</Tilt>
		</div>
	);
} 