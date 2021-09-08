import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    width: 650,
  },
  row: {
    "&:hover": {
      "& $actionButton": {
        opacity: 1,
      },
    },
  },
  actionButton: {
    opacity: 0,
  },
});

function AcceptLessonRequests(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.lessonRequests.length === 0) {
      props.getLessonRequests();
    }
  });

  function formatDate(date) {
    let date1 = new Date(date);

    return date1.toDateString();
  }

  function formatTime(time) {
    let formattedTime = time.slice(0, 5);

    return formattedTime;
  }

  function formatRecurrance(recurrance, type, separation, date) {
    const endDate = formatDate(date);
    
    const recurring = 
      recurrance === 0 ? 'No' :
        type === 2 ?
          separation === 0 ? `Yes, every week until ${endDate}` : `Yes, every other week until ${endDate}` :
          separation === 0 ? `Yes, every month until ${endDate}` : `Yes, every other month until ${endDate}` ;

    return recurring;
  }

  function handleAcceptLesson(lessonId) {
    props.acceptLessonRequest(lessonId)
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Is Recurring?</TableCell>
            <TableCell>Accept Lesson?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.lessonRequests.map((lesson) => (
            <TableRow key={lesson.lesson_id} className={classes.row}>
              <TableCell>{lesson.title}</TableCell>
              <TableCell>{formatDate(lesson.start_date)}</TableCell>
              <TableCell>{formatTime(lesson.start_time)}</TableCell>
              <TableCell>{formatTime(lesson.end_time)}</TableCell>
              <TableCell>{formatRecurrance(lesson.is_recurring, lesson.recurring_type_id, lesson.separation_count, lesson.end_date)}</TableCell>
              <TableCell>
                <IconButton
                  className={classes.actionButton}
                  color="primary"
                  aria-label="delete lesson"
                  component="span"
                  onClick={() => handleAcceptLesson(lesson.lesson_id)}
                >
                  <AddCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AcceptLessonRequests;