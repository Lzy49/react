import { useMemo, useState } from "react"
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
  return { index, item }
})
export const MemoContainer = () => {
  const [text, setText] = useState('123')
  const [flag, setFlag] = useState(2)
  return <div>
    <h1>useMemo 用法</h1>
    <MemoList flag={flag} text={text} />
    <button onClick={
      () => {
        setFlag((n) => n + 1)
      }
    }>change flag++</button>
    <input onChange={(e) => {
      setText(e.target.value)
    }} />
  </div>
}
function MemoList({ flag, text }: { flag: number, text: string }) {
  const list = useMemo(() =>
    data.filter(item => item.item > flag).map(({ item, index }) => ({
      title: item,
      index
    }))
    , [flag])
  return <div>
    text 内容 : {text}
    <ul>
      {list.map(item => <li key={item.index}> item.title</li>)}
    </ul>
  </div>
}