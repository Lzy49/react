import { createContext, useContext } from 'react'
const Context = createContext<{ age: number }>({ age: 0 })
const OtherContext = createContext<{ age: number }>({ age: 0 })
// 顶级
export function ContextContainer() {
  return <div className='wrap'>
    <Context.Provider value={{ age: 10 }}>
      <h1>中途不修改值, 可以直接获取 age</h1>
      <ContextSon />
      <h1>中途使用 Provider 修改 value</h1>
      <ContextParent />
    </Context.Provider>
  </div>
}
// 中途修改值使用
function ContextParent() {
  return <Context.Provider value={{ age: 20 }}>
    <OtherContext.Provider value={{ age: 10 }} >
      <ContextSon />
    </OtherContext.Provider>
  </Context.Provider>
}
// 儿子级
function ContextSon() {
  return <div>
    <ContextGrandson />
  </div>
}
// 孙子级
function ContextGrandson() {
  const context = useContext(Context)
  const otherContext = useContext(OtherContext)
  return <div>
    context:
    {context.age}
    <br />
    OtherContext: 
    {otherContext.age}
  </div>

}