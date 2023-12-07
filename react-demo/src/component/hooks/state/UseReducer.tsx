import { Fragment, useReducer, useState } from "react";

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
export function UseReducerContainer() {
  const [state, display] = useReducer((state: stateType, action: actionType) => {
    switch (action.type) {
      case 'addProperty':
        return { ...state, property: state.property + action.property }
      case 'addBook':
        return {
          ...state, books: [...state.books, { ...action, type: null }]
        }
    }
  }, {
    id: 19,
    name: '小青',
    age: 18,
    property: 19,
    books: [
      { title: 'JavaScript 权威指南' }
    ]
  },(state) => {
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