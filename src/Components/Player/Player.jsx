import { useRef, useState } from "react";
import "./Player.css";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  function onChangeName() {
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <div id="player">
      <h2>Welcome {name ? name : "Unknown Entity"} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={onChangeName}>Set Name</button>
      </p>
    </div>
  );
}
