import { useState } from "react"
import { UseDebugValue } from "./UseDebugValue"
const list = [
  { name: 'useDebugValue', component: UseDebugValue }
]
export function DevContainer() {
  const [on, setOn] = useState<string>(list[0].name)
  function getComponent() {
    const component = list.find(item => item.name === on)
    if (component) {
      return component.component
    } else {
      return () => null
    }
  }
  return <div style={{
    border: '1px solid green',
    padding: '10px'
  }}>
    <h1>性能优化</h1>
    <div className="bts">
      {list.map(item => <button onClick={
        () => setOn(item.name)
      } key={item.name}>{item.name}</button>)}
    </div>
    <div className="contest">
      {
        getComponent()()
      }
    </div>
  </div>
}