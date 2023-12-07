import { forwardRef, useRef, useState } from "react";

export function UseRefContainer() {
  return <>
    <RefTimerContainer />
    <RefDOMContainer />
  </>
}

// Ref timer 
function RefTimerContainer() {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(0)
  const [state, setState] = useState(false)
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
// useRef 绑 DOM
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
const RefDOMItem = forwardRef<HTMLDivElement, any>((props, ItemRef) => {
  return <div {...props} ref={ItemRef} style={{ border: '1px solid green', padding: '5px' }} >
    ChildrenContainer
  </div>
})