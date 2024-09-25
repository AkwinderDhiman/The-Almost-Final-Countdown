
import "./App.css";
import Player from "./Components/Player/Player.jsx";
import TimerChallenge from "./Components/TimerChallenge/TimerChallenge.jsx";

function App() {

  return (
    <>
      <div id="content">
        <h1>
          The <em>Almost</em> Final Countdown
        </h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
        <Player/>
        <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Getting tough" targetTime={10}/>
        <TimerChallenge title="Pros only" targetTime={15}/>
        </div>
        </div>
    </>
  );
}

export default App;
