import { LegacyRef, useRef, useState, forwardRef } from 'react'
//  ref 值保存 setInterval , 做表秒
export function RefContainer() {
  return <div className='wrap'>
    <RefTimerContainer />
    <RefDOMContainer />
    <RefCallBack />
  </div>

}
// Ref timer 
function RefTimerContainer() {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(0)
  const [state, setState] = useState(false)
  timer.current = 111;
  console.log(timer)
  function open() {
    setTime(0)
    setState(true)
    timer.current = setInterval(() => {
      setTime((t) => t + 1)
    }, 1000)
  }
  function close() {
    clearInterval(timer.current)
    setState(false)
  }
  return <div>
    <h1> ref 值保存 setInterval , 做表秒</h1>
    <div>{time}</div>
    {
      !state ?
        <button onClick={open}>开始计时</button> :
        <button onClick={close}>停止计时</button>
    }
  </div>
}

function RefDOMContainer() {
  const Container = useRef<HTMLDivElement>(null)
  const ChildrenContainer = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState('')
  setTimeout(() => {
    setValue(`
      Container.current?.offsetHeight : ${Container.current?.offsetHeight}
      ChildrenContainer.current?.offsetHeight: ${ChildrenContainer.current?.offsetHeight}
    `)
  }, 10)
  return <div ref={Container}>
    <h1>Ref 获取 DOM 节点</h1>
    {value}
    <RefDOMItem ref={ChildrenContainer} />
    <RefDOMItem ref={(n) => {
      console.log(n)
    }} />
  </div>
}


// Ref DOM Item
const RefDOMItem = forwardRef((props: any, ItemRef: LegacyRef<HTMLDivElement>) => {
  return <div {...props} ref={ItemRef} style={{ border: '1px solid green', padding: '5px' }} >
    ChildrenContainer
  </div>
})


// Ref call back
const RefCallBack = () => {
  const [value, setValue] = useState(0)
  return <div>
    <h1>Ref 通过 callback 获取 DOM</h1>
    <div ref={(node) => {
      setValue(node?.offsetHeight || 0)
    }}>{value}</div>
  </div>
}