import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    borderTop: '.5px solid rgba(0, 0, 0, 0.23)',
    justifyContent: 'flex-end',
    padding: 12,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'end',
    },
  },
  btn: {
    textTransform: 'none',
    minWidth: 90,
    padding: 8,
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify='flex-end'>
        <Grid item xs={12} sm={5}>
          <Button
            variant='contained'
            color='primary'
            className={classes.btn}
            disableElevation
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
