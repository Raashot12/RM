import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 32,
    color: 'rgba(0, 0, 0, .87)',
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
  inputTitle: {
    fontWeight: 'medium',
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: '100%',
  },
  header: {
    fontWeight: 'bold',
  },
  formControl: {
    marginTop: theme.spacing(4),
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
  hide: { display: 'none' },
  datePicker: {
    marginRight: 16,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      width: '100%',
    },
  },
}));

const BasicInfo = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState([]);
  const [platform, setPlatform] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const [isTagFocus, setIsTagFocus] = React.useState(false);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8}>
          <Typography variant='h5' component='h2' className={classes.header}>
            Tell event-attenders about your event
          </Typography>
          <Typography
            variant='subtitle1'
            className={clsx(classes.inputTitle, classes.marginTop)}
          >
            What is the name of your event?
          </Typography>
          <TextField
            label='Event title'
            variant='outlined'
            className={classes.textField}
          />
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Category
            </InputLabel>
            <Select value={category} onChange={handleChange} label='Category'>
              <MenuItem value='tech'>Tech</MenuItem>
              <MenuItem value='sports'>Sports</MenuItem>
              <MenuItem value='games'>Games</MenuItem>
              <MenuItem value='anime'>Anime</MenuItem>
              <MenuItem value='relationships'>Relationships</MenuItem>
              <MenuItem value='foodAnddrinks'>Food and drinks</MenuItem>
              <MenuItem value='performance'>
                Performance and visual arts
              </MenuItem>
              <MenuItem value='government'>Government & politics</MenuItem>
              <MenuItem value='schoole'>School activities</MenuItem>
              <MenuItem value='scienceAndTechnology'>
                Science and technology
              </MenuItem>
              <MenuItem value='seasons'>Seasons and holidays</MenuItem>
              <MenuItem value='fashion'>Fashion & beauty</MenuItem>
              <MenuItem value='movies'>Movies and entertainment</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Platform
            </InputLabel>
            <Select
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
              label='Platform'
            >
              <MenuItem value='googleMeet'>Google Meet</MenuItem>
              <MenuItem value='teams'>Microsoft teams</MenuItem>
              <MenuItem value='youtube'>Youtube</MenuItem>
              <MenuItem value='zoom'>Zoom</MenuItem>
            </Select>
          </FormControl>
          <div style={{ display: 'flex' }} className={classes.marginTop}>
            <TextField
              label='Add tags'
              variant='outlined'
              className={classes.textField}
              onFocus={() => setIsTagFocus(true)}
              onBlur={() => setIsTagFocus(false)}
            />
            <Button variant='outlined' className={classes.btn}>
              Add
            </Button>
          </div>
          <Typography
            variant='body2'
            className={`${!isTagFocus && classes.hide}`}
          >
            Improve discoverability of your event by adding tags relevant to the
            subject matter.
          </Typography>

          {/* Date and time */}
          <>
            <Typography
              variant='Subtitle1'
              component='h3'
              className={classes.marginTop}
            >
              Date and time
            </Typography>
            <Typography
              variant='Subtitle1'
              component='p'
              style={{ marginTop: 4 }}
            >
              Let interested candidate know when the event starts.
            </Typography>
            <form noValidate className={classes.marginTop}>
              <TextField
                label='Start Date and time'
                type='datetime-local'
                variant='outlined'
                className={classes.datePicker}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='End Date and time'
                type='datetime-local'
                variant='outlined'
                className={classes.datePicker}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicInfo;
