import React, { useEffect } from 'react';

function HomePage(props) {

  useEffect(() => {
    console.log(props.users.length)
  })

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => {console.log("button clicked")}}></button>
    </div>
  )
}

export default HomePage;