import React, { useEffect } from 'react';

function HomePage(props) {

  useEffect(() => {
    if (props.users.length === 0) {
      props.loadAllUsers();
    }
  });

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => {console.log("button clicked")}}></button>
    </div>
  )
}

export default HomePage;