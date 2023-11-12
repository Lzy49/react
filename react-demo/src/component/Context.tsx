import { createContext, useContext } from 'react'
const Context = createContext({
  username: '小青',
  age: 19
})

export function ContextContainer() {
  const info = useContext(Context)
  return <div>
    <h1>Context 应用</h1>
    通过 useContext 直接获取初始值: (
    {
      info.username + info.age
    })
    <Context.Provider value={
      { ...info, age: info.age + 1 }
    }>
      <ContextItemInterval />
    </Context.Provider>
  </div>
}

function ContextItemInterval() {
  return <><ContextItem /></>
}
function ContextItem() {
  const info = useContext(Context)
  return <div>
    <h1>Context 应用</h1>
    通过 useContext 直接获取 `Context.Provider`值: (
    {
      info.username + info.age
    })
  </div>
}