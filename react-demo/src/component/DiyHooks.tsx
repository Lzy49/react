import { useEffect, useState } from "react"

function useDiy() {
  console.log('组件的每次更新我都会执行')
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('我只在我的状态执行时执行 , 自定义hook的状态是互相隔离的' + value)
  }, [value])
  return {
    value, setValue
  }
}
export function DiyHooks() {
  const [value, setValue] = useState(0)
  const use1 = useDiy()
  const use2 = useDiy()
  return <div>
    <button onClick={() => {
      setValue(n => n + 1)
    }}>组件更新({value}次)</button>
    <button onClick={() => {
      use1.setValue(n => n + 1)
    }}>自定义use1更新({use1.value}次)</button>
    <button onClick={() => {
      use2.setValue(n => n + 1)
    }}>自定义use2更新({use2.value}次)</button>
  </div>
}