import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dropzone from '../../../shared/dropzone';
import '../styles/input.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '32px 0 98px',
    padding: '0 12px',
    color: 'rgba(0, 0, 0, .87)',
  },
  marginTop: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  inputTitle: {
    fontWeight: 'medium',
    marginBottom: theme.spacing(1),
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formControl: {
    minWidth: 240,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      marginRight: 0,
    },
  },
  btn: {
    textTransform: 'none',
    minWidth: 100,
    marginLeft: 8,
    borderWidth: 3,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  selectLabel: { fontSize: 15, top: '-4px' },
  hide: { display: 'none' },
  datePicker: {
    marginRight: 16,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      width: '100%',
    },
  },
}));

const Details = () => {
  const classes = useStyles();

  const [isTagFocus, setIsTagFocus] = React.useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={1}></Grid>
      <Grid item xs={12} sm={7}>
        <Typography variant='h5' component='h2' className={classes.header}>
          Update a photo
        </Typography>
        <Typography variant='body1' component='p'>
          Use an image that tells event attenders about this event.
        </Typography>
        <Dropzone />

        {/* Date and time */}
        <>
          <Typography
            variant='subtitle1'
            component='h3'
            className={`${classes.header} ${classes.marginTop}`}
          >
            Description
          </Typography>
          {/* <Typography
            variant='subtitle1'
            component='p'
            style={{ marginTop: 4 }}
          >
            Tell event-goers more about this event, like the authors name,
            features, sponsors etc.
          </Typography> */}
          <TextField
            label='Details'
            helperText='Tell event-goers more about this event, like the authors name,
            features, sponsors etc.'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
          />
        </>
      </Grid>
      <Grid item xs={false} sm={4}></Grid>
    </Grid>
  );
};

export default Details;
