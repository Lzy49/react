import { useEffect, useRef, useState } from "react"
export function EffectContainer() {
  return <div className="wrap">
    {/* <UseEffect /> */}
    <UseEffectDep />
    <CleanupContainer />
  </div>
}
// effect 在组件刷新后执行.
export function UseEffect() {
  const [refresh, setRefresh] = useState(0)
  const divRef = useRef(null)
  console.log(divRef.current) // Null
  useEffect(() => {
    console.log('!--------------')
    console.log(divRef.current) // element div
    console.log('!--------------')
  },)
  return <div ref={divRef}>刷新了{refresh}次 <button onClick={() =>
    setRefresh((n) => n + 1)
  }>刷新</button></div>
}

// 有选择的 effect
function UseEffectDep() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    console.log('只有 value 2的时候才执行' + value2)
  }, [value2])
  useEffect(() => {
    console.log('只在渲染阶段执行')
  }, [])
  return <div>
    {value1} {value2}
    <button onClick={
      () => setValue1((e) => e + 1)
    }>setValue1</button>
    <button onClick={
      () => setValue2((e) => e + 1)
    }>setValue2</button>
  </div>

}
// effect cleanup
function CleanupContainer() {
  const [show, setShow] = useState(false)
  return <>
    {show && <CleanupItem />}
    <button onClick={() => {
      setShow(!show)
    }}>show</button>
  </>
}
function CleanupItem() {
  const [state, setState] = useState(false)
  useEffect(() => {
    console.log('在组件绑定时更新')
    return () => {
      console.log('在组件卸载时执行')
    }
  }, [])
  return <div>{state}</div>
}