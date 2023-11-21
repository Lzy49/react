import { useState } from "react"
import { UseDeferredValueContainer } from "./UseDeferredValue"
const list = [
  { name: 'UseDeferredValueContainer', component: <UseDeferredValueContainer key={'UseDeferredValueContainer'} />}
]
export function StateContainer() {
  const [on, setOn] = useState<string>(list[0].name)
  function getComponent() {
    console.log(on)
    const component = list.find(item => item.name === on)
    console.log(component)
    if (component) {
      return component.component
    } else {
      return  null
    }
  }
  return <div style={{
    border:'1px solid green',
    padding:'10px'
  }}>
    <h1>状态相关</h1>
    <div className="bts">
      {list.map(item => <button onClick={
        () => setOn(item.name)
      } key={item.name}>{item.name}</button>)}
    </div>
    <div className="contest">
      {
        getComponent()
      }
    </div>
  </div>
}