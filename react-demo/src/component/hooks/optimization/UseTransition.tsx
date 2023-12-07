import { useEffect, useState, useTransition } from "react"
export function UseTransitionContainer() {
  const [state, setState] = useState(1);
  const [isTranstion , startTransition] = useTransition()
  return <div className="wrap">
    <div>
      选择会卡顿
      <select onChange={(n) => {
        setState(+n.target.value)
      }}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
    <div>
      选择会不卡顿
      <select onChange={(n) => {
        startTransition(() => {
          setState(+n.target.value)
        })
      }}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
    {state === 1 && <UseTransitionItem key={1} title="1" />}
    {state === 2 && <UseTransitionItem key={2} title="2" />}
    {state === 3 && <UseTransitionItem key={3} title="3" />}
  </div>
}

function UseTransitionItem({ title }: { title: string }) {
  const [state, setState] = useState<number[]>([])
  useEffect(() => {
    for (let i = 0; i < 10000; i++) {
      setState((n) => [...n, i])
    }
  }, [])
  return <div>
    {title}
    {
      state.map(item => <p key={item}>{item}</p>)
    }
  </div>
}