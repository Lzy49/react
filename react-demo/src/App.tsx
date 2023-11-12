import { useState } from 'react'
import { JsxContainer } from './component/jsx'
import { StateContainer } from './component/state'
import { ReducerContainer } from './component/Reducer'
import { ContextContainer } from './component/Context'
import { ReducerContextContainer } from './component/ReducerContext'
function App() {
  const [state, setState] = useState(3)
  return (
    <>
      <div style={{
        display: 'flex',
        gap: '5px'
      }}>
        <button onClick={() => setState(1)}>jsx</button>
        <button onClick={() => setState(2)}>useState</button>
        <button onClick={() => setState(3)}>useReducer</button>
        <button onClick={() => setState(4)}>ContextContainer</button>
        <button onClick={() => setState(5)}>ReducerContextContainer</button>
      </div>
      {state === 1 && <JsxContainer />}
      {state === 2 && <StateContainer />}
      {state === 3 && <ReducerContainer />}
      {state === 4 && <ContextContainer />}
      {state === 5 && <ReducerContextContainer />}
    </>

  )
}
export default App
