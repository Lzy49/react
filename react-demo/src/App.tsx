import { useState } from 'react'
import { ChoiceContainer, ComponentContainer, ListContainer, EventContainer } from './component/index'
import './app.scss'
function App() {
  const [count, setCount] = useState(10)
  setInterval(() => {
    setCount(count + 1)
  }, 100000)
  return (
    <div className='wrap'>
      {/* 组件传值 */}
      <ComponentContainer age={19} >
        <div>传入内部 children {count}</div>
      </ComponentContainer>
      <ChoiceContainer />
      <ListContainer />
      <EventContainer />
    </div>
  )
}

export default App
