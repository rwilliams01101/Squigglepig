import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import Button from "../components/Button"
import Image from "../components/Image"
import { Redirect } from "react-router-dom";
import logo from "../assets/images/squigglepig_cell.png"

function Guessing() {

  const { imageData, myGuess, setMyGuess, socket, room, username } = useContext(SocketContext)

  const handleGuessChange = (event) => {
    setMyGuess(event.target.value)
  }

  const handleSubmitGuess = () => {
    socket.emit('my-guess', {room, myGuess, username})
    setGameState(1);
  }

  const [gameState, setGameState] = useState(0)

  if(gameState === 1){
    return <Redirect to="/waiting" />
  }


  return (
    <Container>
      <div>
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <div>
        <h4 className="text-center">Make your guess.</h4>
      </div>
      <div>
          <Image image={imageData} />
      </div>
      <div>
        <input type="text" placeholder="guess" className="form-control" onChange={handleGuessChange} />
      </div>
      <div>
        <Button name={"Submit"} onClick={handleSubmitGuess}/>
      </div>
    </Container>
  );

}

export default Guessing;