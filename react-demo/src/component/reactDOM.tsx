import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
export const ReactDOMContainer = () => {
  return <div className='wrap'>
    <FlushSyncContainer />
  </div>
}
export function FlushSyncContainer() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0);
  const valueRef = useRef<HTMLDivElement>(null)
  return <div>
    <h1>react DOM</h1>
    <div ref={valueRef}>{value} {value2}</div>
    <button onClick={
      () => {
        setValue2(123)
        flushSync(() => {
          setValue(10)
          setValue((n) => n + 1)
          console.log(valueRef.current?.childNodes[0]) // 11 0
        })
        console.log(valueRef.current?.childNodes[0], value) // 11 0
      }
    }>click</button>
  </div >
}