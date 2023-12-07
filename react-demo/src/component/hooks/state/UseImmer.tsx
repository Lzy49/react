import { Fragment, useState } from 'react'
import { useImmer, useImmerReducer } from "use-immer";
export function UseImmerContainer() {
  return <>
    <UseImmerStateExample />
    <UseImmerReducer />
  </>
}
export function UseImmerStateExample() {
  const [data, setData] = useImmer({ name: '小电', property: 19 });
  return <div>
    <h1>state useImmer 引用值</h1>
    <p>
      用户: {data.name}
      金额: {data.property}
    </p>
    <button onClick={() => {
      setData((v) => {
        v.property = v.property + 100
      })
    }}>💰💰💰💰💰💰💰💰</button>
  </div>
}

type actionType = {
  type: 'addProperty',
  property: number
} | {
  type: 'addBook',
  title: string
}
type stateType = {
  name: string,
  age: number,
  id: number,
  property: number,
  books: { title: string }[]
}
export function UseImmerReducer() {
  const [state, display] = useImmerReducer((state: stateType, action: actionType) => {
    switch (action.type) {
      case 'addProperty':
        state.property = state.property + action.property
        break
      case 'addBook':
        state.books.push({ title: action.title })
        break
    }
    return state
  }, {
    id: 19,
    name: '小青',
    age: 18,
    property: 19,
    books: [
      { title: 'JavaScript 权威指南' }
    ]
  }, (state) => {
    return state
  });
  return <>
    <div>
      <h1>Render 使用</h1>
      <div>我叫{state.name}, 我今年{state.age}岁, 我有{state.property}元钱, 我有{state.books.map(item => <Fragment key={item.title}>《{item.title}》</Fragment>)} 这几本书</div>
      <button onClick={() => display({
        type: 'addProperty',
        property: 10
      })}>增加10元</button>
      <AddBookContainer key={state.books.length} addBook={(title: string) => {
        display({
          type: 'addBook',
          title
        })
      }} />
    </div>
  </>
}
function AddBookContainer({ addBook }: { addBook: (e: string) => void }) {
  const [name, setName] = useState('')
  return <>
    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="要买的书" />
    <button onClick={() => addBook(name)} > 提交</button>
  </>
}