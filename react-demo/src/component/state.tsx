import { useState } from "react";
import { useImmer } from 'use-immer';
import './app.scss'
export const StateContainer = () => {
  return (
    <div className='wrap'>
      <UseStateExample1 />
      <UseStateExample2 />
      <UseStateExample3 />
      <ComputedContainer />
      <StateKeepContainer />
    </div>
  )
}

// useState 常用场景 -- 队列案例 异步修改值 和 同步修改值
export function UseStateExample1() {
  // 声明一个 state
  const [count, setCount] = useState(0);
  return <div>
    <h1>state 队列案例</h1>
    {count}
    {/* 异步修改值 -- count 在第一次 setCount 时没有发生变化 因为会在最后执行*/}
    <button onClick={() => {
      setCount(count + 1)
      setCount(count + 1)
    }}>
      setCount + 1
    </button>
    {/* 同步修改值 -- count 会在第一次 setCount 时发生变化*/}
    <button onClick={() => {
      setCount((n) => n + 1)
      setCount((n) => n + 1)
      setCount((n) => n + 1)
    }}>
      setCount + 3
    </button>
  </div>
}

// useState 常用场景 -- 修改引用值
export function UseStateExample2() {
  const [data, setData] = useState({ name: '小电', property: 19 });
  return <div>
    <h1>state useState 引用值</h1>
    <p>
      用户: {data.name}
      金额: {data.property}
    </p>
    <button onClick={() => {
      data.property + 100
      setData(data)
    }}>无效 set</button>

    <button onClick={() => {
      setData({ ...data, property: data.property + 100 })
    }}>有效 set</button>
  </div>
}

// useState 常用场景 -- 模拟 Vue Computed
export function ComputedContainer() {
  const [data, setData] = useImmer({ name: '小电', property: 19 });
  const computed = data.property + '元'
  return <div>
    <h1>computed 值</h1>
    <p>
      用户: {data.name}
      金额: {computed}
    </p>
    <button onClick={() => {
      setData((v) => {
        v.property = v.property + 100
      })
    }}>有效 set</button>
  </div>
}

// 状态共享
export function UseStateExample3() {
  const [state, setState] = useState(0);
  return <div>
    <h1>组件共享 state</h1>
    <p>{state}</p>
    <UseStateExample3Item state={state} setState={setState} />
    <UseStateExample3Item state={state} setState={setState} />
  </div>
}
export function UseStateExample3Item({ state, setState }: { state: number, setState: (e: number) => void; }) {
  return <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setState(state + 1)}> + 1</button>
}

// 组件 state 保存
export function StateKeepContainer() {
  const [switchValue, setSwitch] = useState(true)
  return <div>
    <h1> 组件 state 保存机制</h1>
    <button onClick={() => setSwitch((v) => !v)}>change</button>
    <p>同位置同组件会保存</p>
    {
      switchValue ?
        <StateKeepItem1 back={'rgba(181,170,110,.2)'} /> :
        <StateKeepItem1 back={'rgba(94,145,119,.3)'} />
    }
    <p>同位置同组件不同key不会保存</p>
    {
      switchValue ?
        <StateKeepItem1 key='1' back={'rgba(181,170,110,.2)'} /> :
        <StateKeepItem1 key='2' back={'rgba(94,145,119,.3)'} />
    }
    <p>同位置不同组件不会保存</p>
    {
      switchValue ?
        <StateKeepItem1 back={'rgba(181,170,110,.2)'} /> :
        <StateKeepItem2 back={'rgba(94,145,119,.3)'} />
    }
    <p>同位置隐藏展示不会保存</p>
    {
      switchValue && <StateKeepItem1 back={'rgba(181,170,110,.2)'} />
    }
  </div>
}
function StateKeepItem1({ back }: { back: string }) {
  const [state, setState] = useState(0)
  return <div style={{ background: back }}>
    {state} <button onClick={() => setState(v => v + 1)}>+</button>
  </div>
}
function StateKeepItem2({ back }: { back: string }) {
  const [state, setState] = useState(0)
  return <div style={{ background: back }}>
    {state} <button onClick={() => setState(v => v + 1)}>+</button>
  </div>
}