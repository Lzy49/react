import { useCallback, useState, memo, useEffect } from "react"
export function UseCallbackContainer() {
  return <div className="wrap">
    <UseCallBackExample1 />
    <UseCallBackExample2 />
  </div>
}
// 跳过组件更新案例 start
const list = [
  { name: '山姆', phone: 12345, id: 1 },
  { name: '小电', phone: 54321, id: 2 }
]
function UseCallBackExample1() {
  const [user, setUser] = useState(list[0]);
  const [count, setCount] = useState(0)
  const submit = useCallback(() => {
    console.log(`正在给 ${user.name} 发消息, 他的电话是 ${user.phone}`)
  }, [user])
  return <div>
    <h1>使用 useCallback 缓存用户信息到回调函数中</h1>
    <div>
      我要给:
      <select onChange={(e) => {
        setUser(list[Number(e.target.value)])
      }}>
        {
          list.map((item, index) => <option key={item.id} value={index}>{item.name}</option>)
        }
      </select>
      <br />
      电话1: <UseCallBackExample1Item send={submit} log={'因为 send 依赖的是一个 callback 函数, 所以函数被缓存了, 在 dep 改变时更新'} />
      电话2: <UseCallBackExample1Item send={() => submit()} log={'因为 send 依赖的是一个普通函数, 所以函数在组件刷新时, 重新定义. 我也要一直更新'} />
      <br />
      玩具按扭(点击{count}次) <button onClick={() => {
        setCount(count + 1)
      }}> 修改父组件状态, 此时 只有一个弹窗弹出</button>
    </div>
  </div>
}
const UseCallBackExample1Item = memo(({ send, log }: { send: () => void, log: string }) => {
  console.log(log)
  return <button onClick={send}>发消息</button>
})
// 跳过组件更新案例 end

// 作为 useEffect 依赖值, 拆解 uesEffect
function UseCallBackExample2() {
  const [state, setState] = useState(0)
  const [playCount, play] = useState(0)
  /*
    // 未重构
    useEffect(() => {
      // ...省略额外逻辑
      alert(`state 被使用了 (${state})`)
      // ...省略额外逻辑
    }, [state])
  */
  // 重构
  const log = useCallback(() => {
    console.log(`state 被使用了 (${state})`)
  }, [state])
  useEffect(() => {
    // ...省略额外逻辑
    log()
    // ...省略额外逻辑
  }, [log])
  return <div>
    <h1>使用 useCallback 重构 useEffect</h1>
    当 {state} 发生改变时, 弹出弹窗否则不弹.
    <button onClick={() => play((n) => n + 1)}>play({playCount})</button>
    <button onClick={() => setState((n) => n + 1)}>setState({state})</button>
  </div>
}