import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

export function UseEffectContainer() {
  return <div className="wrap">
    <UseEffectExample1 />
    <UseEffectExample2 />
    <UseEffectExample3 />
    <UseEffectExample4 />
    <UseEffectExample5 />
  </div>
}
// 使用 useCallback 和 useState
export function UseEffectExample1() {
  const [count, setCount] = useState(0)
  const [n, setN] = useState(0)
  const label = ['-', '*', '<']
  const log = useCallback(() => {
    console.log(label[n], label[n], label[n])
  }, [n])
  useEffect(() => {
    log()
    console.log(`count 的当前值是 ${count}`)
    log()
  }, [log, count])
  return <div>
    <h1> useEffect 引用 useCallback 和 useState</h1>
    <div>
      <button onClick={() => {
        setCount(n => n + 1)
      }}>点击修改({count})</button>
      <button onClick={() => {
        setN((n) => (n + 1 > 2) ? 0 : n + 1)
      }}>点击切换 log 风格 并打印</button>
    </div>
  </div>
}

// useEffect  执行顺序测试
export function UseEffectExample2() {
  const [state, setState] = useState(0);
  const [log, setLog] = useState('');
  useEffect(() => {
    setLog((n) => n + '我是 effect 函数体' + state + '\n')
    return () => {
      setLog((n) => n + '我是 effect 返回值' + state + '\n')
    }
  }, [state])
  return <div>
    <h1>测试 useEffect 执行顺序 , 以及 effect 中 state 的值</h1>
    <div style={{
      whiteSpace: 'pre-line'
    }}>
      {log}
    </div>
    <button onClick={
      () => setState(n => n + 1)
    }>change state</button>
  </div>
}

// useEffect 调用时机  已经 解决
function UseEffectExample3() {
  const [heightEffect, setHeightEffect] = useState(0);
  const [heightLayoutEffect, setHeightLayoutEffect] = useState(0);
  const refEffect = useRef<HTMLDivElement>(null);

  let now = performance.now();
  while (performance.now() - now < 200) {
    // 不做任何事情...
  }
  useEffect(() => {
    if (refEffect.current) {
      setHeightEffect(refEffect.current.offsetWidth);
    }
  }, []);
  useLayoutEffect(() => {
    if (refEffect.current) {
      setHeightLayoutEffect(refEffect.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div ref={refEffect} style={{ width: '200px', height: '50px', background: 'lightgray' }}>这是一个方块</div>
        <div style={{ width: '50%', float: 'left' }}>
          <h2>使用 useEffect</h2>
          <div style={{ width: '100px', height: `${heightEffect}px`, background: 'red', marginTop: '10px' }}>红色方块</div>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <h2>使用 useLayoutEffect</h2>
          <div style={{ width: '100px', height: `${heightLayoutEffect}px`, background: 'blue', marginTop: '10px' }}>蓝色方块</div>
        </div>
      </div>
    </div>
  );
}

// useEffect 在严格模式下
function UseEffectExample4() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('%c 我被执行了','color:red')
    setText((n) => n + `我的值是${count}.`)
    return () => {
      console.log('%c 神奇','color:red')
    }
  }, [count])
  return <div>{text} <button onClick={() => {
    setCount(n => n + 1)
  }}>+</button></div>
}

// effect 子组件更新 , effect 表现
function UseEffectExample5() {
  const [id, setId] = useState('1')
  return <div>
    <h1> 子组件更新, effect 的 return 会如何表现</h1>
    <select onChange={(e) => setId(e.target.value)} value={id}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <EffectChildrenItem id={id} />
  </div>
}

function EffectChildrenItem({ id }: { id: string }) {
  useEffect(() => {
    console.log(`%c effect 当前id是${id}` , 'color:red')
    return () => {
      console.log(`%c effect callback 当前id是${id}` , 'color:red')
    }
  } , [id])
  return <div> 
    {
      id
    }
  </div>
}