import { Container, FormControlLabel, makeStyles, TextField, Checkbox, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
const jwt = require('jsonwebtoken');

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

function LessonRequestPage(props) {

  const classes = useStyles();

  useEffect(() => {
    if (requestInfo.student_id === 0) {
      let userId = decodeJwt();
      setRequestInfo({ ...requestInfo, ['student_id']: userId});
    };
  })

  const [requestInfo, setRequestInfo] = useState(
  {
    student_id: 0,
    title: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    is_recurring: false,
    recurring_type_id: null,
    separation_count: null,
    max_occurances: null,
    day_of_week: null,
    week_of_month: null,
    day_of_month: null,
    month_of_year: null
  })

  const [disabled, setDisabled] = useState({is_disabled: true})
  const [error, setError] = useState('');

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setRequestInfo((previousRequestInfo) => ({
      ...previousRequestInfo,
      [name]: value
    }));
  }

  function handleCheckboxChange(event) {
    setRequestInfo({ ...requestInfo, [event.target.name]: event.target.checked });
    setDisabled({ ...disabled, ['is_disabled']: !event.target.checked});
  }

  function decodeJwt() {
    const token = localStorage.getItem('token');

    const decoded = jwt.verify(token, 'superSecretLessonApp');

    let userId = decoded.id;

    return userId;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props
      .requestLesson(requestInfo)
      .then(() => props.history.push(process.env.PUBLIC_URL + '/'))
      .catch((error) => setError(error)) 
  }

  return (
    <Container>
      <h1>Lesson Request Page</h1>
      <form className={classes.container} onSubmit={handleFormSubmit}>
      <TextField 
      required
      onChange={handleInputChanges}
      value={requestInfo.title}
      name='title'
      label='Title'
      type='text' />
      <TextField
      required
      onChange={handleInputChanges}
      value={requestInfo.start_date}
      name='start_date'
      label='Date'
      type='date'
      InputLabelProps={{ shrink: true }}
      className={classes.textField} />
      <TextField
      required
      onChange={handleInputChanges}
      value={requestInfo.start_time}
      name='start_time'
      label='Start Time'
      type='time'
      InputLabelProps={{ shrink: true }}
      className={classes.textField} />
      {/* MAYBE CHANGE END TIME TO LESSON LENGTH SELECTOR */}
      {/* <FormControl>
        <InputLabel shrink id="demo-simple-select-label">Length of Lesson</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={requestInfo.recurring_type_id}
          name='recurring_type_id'
          onChange={handleInputChanges}
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={2}>Weekly</MenuItem>
          <MenuItem value={3}>Monthly</MenuItem>
        </Select>
      </FormControl> */}
      <TextField
      required
      onChange={handleInputChanges}
      value={requestInfo.end_time}
      name='end_time'
      label='End Time'
      type='time'
      InputLabelProps={{ shrink: true }}
      className={classes.textField} />
      <FormControlLabel 
        control={
          <Checkbox 
          checked={requestInfo.is_recurring}
          onChange={handleCheckboxChange}
          name='is_recurring'
          />
        }
        label="Make lesson recurring?"
      />
      <FormControl disabled={disabled.is_disabled}>
        <InputLabel shrink id="demo-simple-select-label">Recurrance type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={requestInfo.separation_count}
          name='separation_count'
          onChange={handleInputChanges}
        >
          <MenuItem value={undefined}>None</MenuItem>
          <MenuItem value={0}>Every</MenuItem>
          <MenuItem value={1}>Every Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={disabled.is_disabled}>
        <InputLabel shrink id="demo-simple-select-label">Recurrance type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={requestInfo.recurring_type_id}
          name='recurring_type_id'
          onChange={handleInputChanges}
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={2}>Week</MenuItem>
          <MenuItem value={3}>Month</MenuItem>
        </Select>
      </FormControl >
      <TextField
      disabled={disabled.is_disabled}
      required
      onChange={handleInputChanges}
      value={requestInfo.end_date}
      name='end_date'
      label='End Date'
      type='date'
      InputLabelProps={{ shrink: true }}
      className={classes.textField} />
      <Button
        type="submit"
        className="request-button"
        variant="contained"
        color="primary">Request Lesson</Button>
      </form>
    </Container>
  )
}

export default LessonRequestPage;