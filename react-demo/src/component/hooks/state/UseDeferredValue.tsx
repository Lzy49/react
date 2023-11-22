import { useState, useDeferredValue } from "react"
export function UseDeferredValueContainer() {
  const [state, setState] = useState(1)
  const oldState = useDeferredValue(state)
  console.log(oldState ,state )
  return <div>
    <h1> useDeferredValue 保存 state 上一个值</h1>
    <p> 当前值是 {state} , 上一个值是 {oldState}</p>
    <button onClick={
      () => setState(n => n + 1)
    }> state + 1</button>
  </div>
}