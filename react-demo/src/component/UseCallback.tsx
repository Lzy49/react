import { useCallback, useState, memo } from "react"

export function UseCallbackContainer() {
  return <>
    <UseCallBackExample1 />
  </>
}
const useInfo = [
  { name: '山姆', phone: 12345, id: 1 },
  { name: '小电', phone: 54321, id: 2 }
]
function UseCallBackExample1() {
  const [user, setUser] = useState(useInfo[0]);
  const [count, setCount] = useState(0)
  const submit = useCallback(() => {
    console.log(`正在给 ${user.name} 发消息, 他的电话是 ${user.phone}`)
  }, [user])
  return <div>
    <h1>使用 useCallback 缓存用户信息到回调函数中</h1>
    <div>
      {
        useInfo.map(item => <button key={item.id} onClick={
          () => {
            setUser(item)
          }
        }>{item.name}</button>)
      }
      <UseCallBackExample1Item1 send={submit} />
      <UseCallBackExample1Item2 send={() => submit()} />
      {count} <button onClick={() => {
        setCount(count + 1)
      }}>++</button>
    </div>
  </div>
}

const UseCallBackExample1Item1 = memo(({ send }: { send: () => void }) => {
  console.log('传入的 send 被 useCallback 包裹, dep 不变我不动')
  return <button onClick={send}>发消息 有 useCallback</button>
})
const UseCallBackExample1Item2 = memo(({ send }: { send: () => void }) => {
  console.log('传入的 send 没有被包裹, 父组件一个更新. 我就更新')
  return <button onClick={send}>发消息 无 useCallback</button>
})