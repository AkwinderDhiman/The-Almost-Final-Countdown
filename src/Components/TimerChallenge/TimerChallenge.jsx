import { useState, useRef } from "react";
import "./TimerChallenge.css";
import ResultModal from "../ResultModal/ResultModal";

export default function TimerChallenge({ title, targetTime }) {
//   const [timeStarted, setTimeStarted] = useState(false);
//   const [timeExpired, setTimeExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining <targetTime*1000;
   
  if(timeRemaining <=0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(()=>{
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10)
    },10)
    // timer.current = setTimeout(() => {
    //   setTimeExpired(true);
    //   console.log(dialog.current); 
    //   dialog.current.showModal();
    // }, targetTime * 1000);
    // setTimeStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current)
    // clearTimeout(timer.current);
  }

  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is running..." : "Timer Inactive"}{" "}
        </p>
      </section>
    </>
  );
}
