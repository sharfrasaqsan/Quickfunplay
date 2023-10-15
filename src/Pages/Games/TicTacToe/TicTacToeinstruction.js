import React, { useState } from "react";
import "../InstructionModal.css";

function TicTacToeinstruction() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="instructions-button">
      <button className="open-instructions-button" onClick={toggleModal}>
        Instructions
      </button>

      {isOpen && (
        <div className="instructions-modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Game Instructions</h2>
            <p>
              Welcome to the classic game of Tic-Tac-Toe! In this two-player
              game, you'll take turns marking squares on a 3x3 grid with your
              symbol. The objective is to be the first to create a line of three
              of your symbols - either horizontally, vertically, or diagonally.
            </p>
            <p>Here's how to play:</p>
            <ul>
              <li>Player X goes first.</li>
              <li>Click on an empty square to place your symbol.</li>
              <li>
                The game alternates between X and O until there's a winner or a
                draw.
              </li>
              <li>
                If all squares are filled and there's no winner, the game ends
                in a draw.
              </li>
            </ul>
            <p>
              To make your gaming experience more enjoyable, we've added some
              features:
            </p>
            <ul>
              <li>The current player is displayed at the top.</li>
              <li>If someone wins, their name is proudly announced.</li>
              <li>If it's a draw, you'll be informed that it's a tie.</li>
              <li>
                You can restart the game anytime by clicking the "Restart"
                button.
              </li>
              <li>
                If the game is over, use "Start Over" to begin a new match.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicTacToeinstruction;
