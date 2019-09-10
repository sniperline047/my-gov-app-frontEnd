import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	footer: {
	  	position: 'relative',
		padding: '15px',
		bottom: '0',
		left: '0',
		width: '100%',
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
	}
}));

function Footer() {

	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<footer>
			  	<small className="f6 db tc">© 2019 <b className="ttu">sniperline047</b>., All Rights Reserved</small>
			  	<small className="f6 db tc">All logo's belong to the respective user!</small>
			  	<div className="tc mt3">
				    <a href="https://github.com/sniperline047" title="GitHub" className="f6 dib ph2 link mid-gray dim">GitHub</a>
				    <a href="https://www.linkedin.com/in/ayushsingh11be17/"    title="LinkedIn" className="f6 dib ph2 link mid-gray dim">LinkedIn</a>
			  	</div>
			  	<div className="tc mt3 f6 dib ph2 link mid-gray dim">
			  		Icons made by
			  		<a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market" className="f6 dib ph2 link mid-gray dim">Vectors Market</a>
			  		from 
			  		<a href="https://www.flaticon.com/" title="Flaticon" className="f6 dib ph2 link mid-gray dim">www.flaticon.com</a>
		  		</div>
			</footer>
		</div>
	);
}

export default Footer;