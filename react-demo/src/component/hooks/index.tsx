import { useState } from "react"
import { UseCallbackContainer } from "../UseCallback"
const list = [
  { name: 'useCallback', component: UseCallbackContainer }
]
export function HooksContainer() {
  const [on, setOn] = useState<string>(list[0].name)
  function getComponent() {
    const component = list.find(item => item.name === on)
    if (component) {
      return component.component
    } else {
      return () => null
    }
  }
  return <>
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
  </>
}