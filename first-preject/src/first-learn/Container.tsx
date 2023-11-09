import MyButton from './MyButton'
import List from './List'
import MyCommButton from './MyCommButton'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function changeCount() {
    setCount(count + 1)
  }
  return (
    <>
      <List />
      <MyCommButton count={count} setCount={changeCount} />
      <MyCommButton count={count} setCount={changeCount} />
      <MyButton />
    </>
  )
}

export default App
