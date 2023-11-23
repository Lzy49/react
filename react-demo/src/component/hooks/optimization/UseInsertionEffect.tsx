import { useEffect, useInsertionEffect, useLayoutEffect, useRef } from "react"

export function UseInsertionEffectContainer() {
  return <div className="wrap">
    <TestRunSequence />
  </div>
}
// test useEffect useInsertionEffect useLayoutEffect 执行顺序
function TestRunSequence() {
  const ref = useRef(null)
  useEffect(() => {
    console.log('this is useEffect')
    console.log(ref.current)
  }, [])
  useLayoutEffect(() => {
    console.log('this. useLayoutEffect')
    console.log(ref.current)
  })
  useInsertionEffect(() => {
    const cssString = '.insertion-style{color:red}';
    const StyleNode = document.createElement('style')
    StyleNode.innerText = cssString;
    document.head.appendChild(StyleNode)
    console.log('this is useInsertionEffect')
    console.log(ref.current)
  }, [])
  return <div ref={ref} className="insertion-style">123</div>
}