import { useState } from 'react'

function useLogic() {

const [board, setBoard] = useState(Array(9).fill(null));

const [point, setPoint] = useState(null)
const win = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
]
const [x, setX] = useState(true)

function click(index) {
//const winner = calculateWinner(board);
//if (winner || board[index]) return;

const newBoard = [...board];
newBoard[index] = x ? "X": "O";
setBoard(newBoard);
setX((prev)=>!prev);

}


function winner(board) {
// Winner logic can be added here
}

return {board, point, click, winner, x, win }
}

export default useLogic