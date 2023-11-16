import { useState } from 'react'
import { JsxContainer } from './component/jsx'
import { StateContainer } from './component/state'
import { ReducerContainer } from './component/Reducer'
import { ContextContainer } from './component/Context'
import { ReducerContextContainer } from './component/ReducerContext'
import { RefContainer } from './component/ref'
import { ReactDOMContainer } from './component/reactDOM'
import { EffectContainer } from './component/effect'
import { MemoContainer } from './component/Memo'
import { SyncExternalStoreContainer } from './component/SyncExternalStore'
function App() {
  const [state, setState] = useState(10)
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
        <button onClick={() => setState(6)}>RefContainer</button>
        <button onClick={() => setState(7)}>ReactDOMContainer</button>
        <button onClick={() => setState(8)}>EffectContainer</button>
        <button onClick={() => setState(9)}>MemoContainer</button>
        <button onClick={() => setState(10)}>SyncExternalStoreContainer</button>
      </div>
      {state === 1 && <JsxContainer />}
      {state === 2 && <StateContainer />}
      {state === 3 && <ReducerContainer />}
      {state === 4 && <ContextContainer />}
      {state === 5 && <ReducerContextContainer />}
      {state === 6 && <RefContainer />}
      {state === 7 && <ReactDOMContainer />}
      {state === 8 && <EffectContainer />}
      {state === 9 && <MemoContainer />}
      {state === 10 && <SyncExternalStoreContainer />}
    </>

  )
}
export default App
