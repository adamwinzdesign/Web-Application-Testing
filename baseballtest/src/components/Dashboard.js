import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  console.log(`balls: ${balls}`);
  const [strikes, setStrikes] = useState(0);
  console.log(`strikes: ${strikes}`);
  const [outs, setOuts] = useState(0);
  console.log(`outs: ${outs}`);

  const addOuts = () => {
    if(outs === 2) {
      setOuts(0);
      console.log('Outs reset!')
    } else {
      setOuts(outs => outs + 1)
    }
  }

  const addBalls = () => {
    if(balls === 3) {
      resetCount();
      console.log(`balls reset!`)
    } else {
      setBalls(balls => balls + 1);
    }
  }

  const addStrikes = () => {
    if(strikes === 2) {
      resetCount();
      addOuts();
      console.log('strikes reset!')
    } else {
      setStrikes(strikes => strikes + 1);
    }
  }

  const foulBall = () => {
    if(strikes === 2) {
      return;
    } else {
      setStrikes(strikes => strikes + 1);
    }
  }

  const resetCount = () => {
    setStrikes(0);
    setBalls(0);
  }

  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={foulBall}>Foul Ball!</button>
      <button onClick={addStrikes}>Strike!</button>
      <button onClick={addBalls}>Ball!</button>
      <button onClick={resetCount}>End of at-bat!</button>
      <Display strikes={strikes} balls={balls} outs={outs}/>
    </div>
  )
}

export default Dashboard;
