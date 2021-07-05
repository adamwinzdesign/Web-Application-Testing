import React from 'react';

const Display = (props) => {
  console.log(props);

  return(
    <div>
      <h1>Game Display:</h1>
      <h2>Current Strikes: {props.strikes}</h2>
      <h2>Current Balls: {props.balls}</h2>
      <h2>Current Outs: {props.outs}</h2>
    </div>
  )
}

export default Display;
