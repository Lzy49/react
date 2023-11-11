import { Fragment, ReactElement, useState } from "react"

// 函数传值
export function ComponentContainer({ age = 19, name, children }: { children: any, age: number, name?: string }) {
  const LittleComponent = <div>123</div>
  return (
    <div>
      <h1>props Container</h1>
      {/* 关于组件传值 */}
      <div data-name={name}>
        {LittleComponent} {age}
        {/* 函数传组件入内部 */}
        {children}
      </div>
      {/* 关于组件如何使用if */}
    </div>
  )
}
// 组件 if 逻辑
export function ChoiceContainer() {
  const [bar, setBar] = useState(true)
  // 函数 if 形式
  const isBar = () => {
    if (bar) {
      return <div> bar === true</div>
    } else {
      return <div> bar === false</div>
    }
  }
  // 利用变量做响应
  let template: ReactElement<any, any> = <></>;
  if (bar) {
    template = <div>template bar</div>
  }

  return (
    <div>
      <h1>if Container</h1>
      {/* 三元 */}
      {bar ? <div> bar true</div> : <div> bar false </div>}
      {/* || */}
      {bar || <>bar false</>} <br />
      {/* && */}
      {bar && <>bar true</>}
      {/* 函数调用 */}
      {isBar()}
      {/* 利用变量 */}
      {template}
      <button onClick={() => { setBar(!bar) }}>change bar </button><br />
    </div>)
}
// 列表渲染
export function ListContainer() {
  const array = [{ id: 0, title: 'one' }, { id: 0, title: 'two' }, { id: 0, title: 'three' }, { id: 0, title: 'four' }]
  return <div style={{ border: '1px solid red' }}>
    <h1>list Container</h1>
    <ul>
      {array.map(item => <li key={item.id}>{item.title}</li>)}
      {array.map(item => <Fragment key={item.id}><li>{item.title}</li><li>{item.id}</li></Fragment>)}
    </ul>
  </div>
}
// 组件事件
export function EventContainer() {
  function handleClick() {
    alert('内联函数名')
  }
  return <div>
    <h1>event Container</h1>
    <button onClick={handleClick}> 内联函数名</button>
    <button onClick={() => { alert('内联箭头函数') }}> 内联箭头函数</button>
    <button onClick={function () { alert('内联函数声明') }}> 内联函数声明</button>
    <div onClick={() => { alert('div event') }}>
      <button onClick={(e) => {
        e.stopPropagation();
        alert('禁止冒泡')
      }}> 禁止冒泡</button>
      <button onClick={function () { alert('不禁止冒泡') }}> 不禁止冒泡</button>
    </div>
    <form onSubmit={e => {
      e.preventDefault();
      alert('提交表单！');
    }}>
      <input />
      <button>发送</button>
    </form>
  </div>
}