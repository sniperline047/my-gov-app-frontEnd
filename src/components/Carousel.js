import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Steps } from './Steps'; 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
  	maxWidth: '50%',
    flexGrow: 1,
    border: '1px solid white',
	  backgroundColor: "rgba(255,183,0,0.5)",		
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	  borderRadius: '25px',
	  textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing(4),
  },
  img: {
    height: 400,
    display: 'block',
    width: '100%',
  },
  footer: {
    fontSize: '1rem',
  }
}));

function Carousel() {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    
    function handleStepChange(step) {
  	    setActiveStep(step);
    }

    return (
	    <div className={classes.root}>
	        <Paper square elevation={0} className={classes.header}>
	            <Typography className={classes.header} >{Steps[activeStep].label}</Typography>
	        </Paper>
	        <AutoPlaySwipeableViews
		        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
		        index={activeStep}
		        onChangeIndex={handleStepChange}
		        enableMouseEvents
	        >
		        {Steps.map((step, index) => (
		          <div key={step.label}>
		            {Math.abs(activeStep - index) <= 2 ? (
		              <img className={classes.img} src={step.imgPath} alt={step.label} />
		            ) : null}
		          </div>
		        ))}
	        </AutoPlaySwipeableViews>
	        <h1 className={classes.footer}>Our Department's</h1>
	    </div>
    );
} 

export default Carousel;