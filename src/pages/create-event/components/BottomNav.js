import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    borderTop: '.5px solid rgba(0, 0, 0, 0.23)',
    padding: 12,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'end',
    },
  },
  prevBtn: {
    textTransform: 'none',
    minWidth: 90,
    padding: 8,
  },
  nextBtn: {
    textTransform: 'none',
    minWidth: 90,
    padding: 8,
  },
}));

export default function SimpleBottomNavigation({ match }) {
  const classes = useStyles();
  const history = useHistory();

  const [disabled, setDisabled] = React.useState(true);
  const [toggleUrl, setToggleUrl] = React.useState(true);

  React.useEffect(() => {
    setDisabled(match.url === '/create-event/basic-info');
    console.log(match.url);
    console.log(disabled);
  }, [toggleUrl]);

  const handlePrev = () => {
    switch (match.url) {
      case '/create-event/details':
        history.push('/create-event/basic-info');
        break;
      case '/create-event/details':
        history.push('/create-event/basic-info');
        break;
    }
  };

  const handleNext = () => {
    setToggleUrl(!toggleUrl);
    switch (match.url) {
      case '/create-event/basic-info':
        history.push('/create-event/details');
        break;
      case '/create-event/details':
        history.push('/create-event/payment-setup');
        break;
    }
  };

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid container item xs={12} sm={7} justify='space-between'>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              className={classes.prevBtn}
              disabled={disabled}
              disableElevation
              onClick={handlePrev}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              className={classes.nextBtn}
              disableElevation
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
