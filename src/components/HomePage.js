import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Box, Button } from '@material-ui/core';
import React, { useEffect } from 'react';

function HomePage(props) {

  // useEffect(() => {
  //   if (props.users.length === 0) {
  //     props.loadAllUsers();
  //   }
  // });

  return (
    <Box>
      <Button onClick={() => props.loadAllUsers()}>Click to populate users</Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => {
              return (
                <TableRow key={user.user_id}>
                <TableCell>{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.description}</TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HomePage;