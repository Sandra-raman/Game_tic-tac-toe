import React, { useState } from 'react';
import './TicTacToe.css';
import cross from '../assets/X.png';
import circle from '../assets/O.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winnerMessage, setWinnerMessage] = useState("");

    const toggle = (e, num) => {
        if (lock || data[num]) return;
        
        const symbol = count % 2 === 0 ? "x" : "o";
        data[num] = symbol;
        setCount(count + 1);

        e.target.innerHTML = `<img src='${symbol === "x" ? cross : circle}' alt='${symbol}'>`;

        checkWin();
    };

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }

        if (count === 8){ setWinnerMessage("It's a Tie!");}
    };

    const won = (winner) => {
        setLock(true);
        setWinnerMessage(
            `<h2 className='text-info'>Congratulations:</h2> ${winner === "x" ? `<img src=${cross} alt="x" width="40" height="40"/>` : `<img src=${circle} alt="o" width="40" height="40"/>`}`
        );
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setWinnerMessage("");
        document.querySelectorAll('.col').forEach((col) => (col.innerHTML = ""));
    };

    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game</h1>
            <h2 id='titleRef' dangerouslySetInnerHTML={{ __html: winnerMessage }}></h2>
            <div className="board">
                <div className="row1">
                    <div className="col" onClick={(e) => toggle(e, 0)}></div>
                    <div className="col" onClick={(e) => toggle(e, 1)}></div>
                    <div className="col" onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className="row2">
                    <div className="col" onClick={(e) => toggle(e, 3)}></div>
                    <div className="col" onClick={(e) => toggle(e, 4)}></div>
                    <div className="col" onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className="row3">
                    <div className="col" onClick={(e) => toggle(e, 6)}></div>
                    <div className="col" onClick={(e) => toggle(e, 7)}></div>
                    <div className="col" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className="custom-btn btn-8" onClick={reset}><span>Restart</span></button>
        </div>
    );
};

export default TicTacToe;
