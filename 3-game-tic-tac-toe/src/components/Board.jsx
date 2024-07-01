/* eslint-disable react/prop-types */
import calculateWinner from "../utils/calculateWinner"
import Square from "./Square"

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(index) {
    const winner = calculateWinner(squares)

    if (squares[index] || winner) return

    const nextSquares = squares.slice()
    nextSquares[index] = xIsNext ? "X" : "O"

    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let gameStatus
  if (winner) {
    gameStatus = `${winner} is the winner!`
  } else if (squares.every((square) => square !== null)) {
    gameStatus = "DRAW!"
  } else {
    gameStatus = xIsNext ? "X is turns" : "O is turns"
  }

  return (
    <>
      <div className="status">{gameStatus ? <p>{gameStatus}</p> : ""}</div>
      <div className="board">
        {Array(9)
          .fill()
          .map((_, index) => (
            <Square
              key={index + 1}
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
            />
          ))}
      </div>
    </>
  )
}
