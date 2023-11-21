import { Optimization } from './optimization'
import { DevContainer } from './dev'
import { StateContainer } from './state'
import { useState } from "react"
const list = [
  { name: 'Optimization', component: <Optimization key={'Optimization'} />},
  { name: 'StateContainer', component: <StateContainer key={'StateContainer'}/> },
  { name: 'DevContainer', component: <DevContainer key={'DevContainer'}/> }
]
export function HooksContainer() {
  const [on, setOn] = useState<string>(list[0].name)
  function getComponent() {
    const component = list.find(item => item.name === on)
    if (component) {
      return component.component
    } else {
      return null
    }
  }
  return <div style={{}}>
    <h1>Hooks API</h1>
    <div className="bts" style={{ paddingBottom: '10px' }}>
      {list.map(item => <button onClick={
        () => setOn(item.name)
      } key={item.name}>{item.name}</button>)}
    </div>
    <div className="contest">
      {
        getComponent()
      }
    </div>
  </div >
}