import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import '../styles/input.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '32px 0 98px',
    padding: '0 12px',
    color: 'rgba(0, 0, 0, .87)',
  },
  marginTop: {
    fontWeight: 600,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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
    marginBottom: 40,
  },
  heading: {
    fontWeight: 600,
    margin: '24px 0 0px',
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
    marginRight: 8,
    borderWidth: 2,
    padding: '10px 24px',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
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

const PaymentSetup = () => {
  const classes = useStyles();

  const [option, setOption] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={1}></Grid>
      <Grid item xs={12} sm={7}>
        <Typography variant='h5' component='h2' className={classes.header}>
          Select a payment option
        </Typography>
        <div>
          <Button
            variant={option === 'free' ? 'contained' : 'outlined'}
            disableElevation
            className={classes.btn}
            onClick={() => setOption('free')}
            color={option === 'free' ? 'primary' : ''}
          >
            Free
          </Button>
          <Button
            variant={option === 'paid' ? 'contained' : 'outlined'}
            className={classes.btn}
            disableElevation
            onClick={() => setOption('paid')}
            color={option === 'paid' ? 'primary' : ''}
          >
            Paid
          </Button>
          <Button
            variant={option === 'donate' ? 'contained' : 'outlined'}
            className={classes.btn}
            disableElevation
            onClick={() => setOption('donate')}
            color={option === 'donate' ? 'primary' : ''}
          >
            Donate
          </Button>
        </div>

        {/* Date and time */}
        {option === 'paid' && (
          <>
            <Typography
              variant='subtitle1'
              component='h3'
              className={`${classes.marginTop}`}
            >
              How much is this event?
            </Typography>
            <FormControl fullWidth variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-amount'>Price</InputLabel>
              <OutlinedInput
                id='outlined-adornment-amount'
                value={price}
                style={{ height: 48 }}
                onChange={(event) => handleChange(event)}
                startAdornment={
                  <InputAdornment position='start'>₦</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <Typography
              variant='subtitle1'
              component='p'
              className={`${classes.heading}`}
            >
              When should payment start and end?
            </Typography>
            <form noValidate>
              <TextField
                label='Start Date and time'
                type='datetime-local'
                variant='outlined'
                className={`${classes.datePicker}`}
                style={{ marginTop: 20 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='End Date and time'
                type='datetime-local'
                variant='outlined'
                className={`${classes.datePicker}`}
                style={{ marginTop: 20 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </>
        )}
      </Grid>
      <Grid item xs={false} sm={4}></Grid>
    </Grid>
  );
};

export default PaymentSetup;
