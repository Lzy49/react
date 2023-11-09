//  井字游戏
import { useState } from 'react'
import './style.css'
import GameItem from './Item'
export default function Game() {
  const [history, setHistory] = useState<Array<{ value: 'x' | 'o' | null, state: boolean }>[]>([new Array(9).fill({
    value: null, state: false
  })])
  const [gameStart, setGameStart] = useState(true)
  function handleItem(index: number) {
    if (!gameStart) { return }
    const nextHistory = [...history[history.length - 1]]
    if (nextHistory[index].value) {
      return
    }
    nextHistory[index] = { value: history.length % 2 ? 'x' : 'o', state: false }
    const r = calculateWinner(nextHistory.map(item => item.value))
    if (Array.isArray(r)) {
      setGameStart(false)
      r.forEach(index => {
        nextHistory[index].state = true
      })
    }
    console.log(nextHistory)
    setHistory([...history, nextHistory])
  }


  function goBack(index: number): void {
    const nextHistory = history.splice(0, index + 1)
    setHistory(nextHistory)
  }

  return <div className='game'>
    <div className='checker'>
      {
        history[history.length - 1].map((item, index) => <GameItem key={index} value={item.value} state={item.state} click={() => handleItem(index)} />)
      }
    </div>
    <div className='history'>
      {
        history.map((item, index) => <p onClick={() => goBack(index)} key={index}>#{index + 1} {index === 0 ? 'game start' : 'go back'}</p>)
      }
    </div>
  </div>

  function calculateWinner(squares: any[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return null;
  }
}