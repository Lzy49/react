import { useState } from "react"
import { UseImperativeHandleContainer } from "./UseImperativeHandle"
const list = [
  { name: 'UseImperativeHandleContainer', component: <UseImperativeHandleContainer key={'UseImperativeHandleContainer'} /> }
]
export function CommContainer() {
  const [on, setOn] = useState<string>(list[0].name)
  function getComponent() {
    const component = list.find(item => item.name === on)
    if (component) {
      return component.component
    } else {
      return null
    }
  }
  return <div style={{
    border: '1px solid green',
    padding: '10px'
  }}>
    <h1>父子组件 hook</h1>
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