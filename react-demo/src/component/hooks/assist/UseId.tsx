import { useId } from "react"

export function UseId() {
  return <div className="wrap">
    <UseIdExample1 />
    <UseIdExample2 />
  </div>
}
export function UseIdExample1() {
  const id = useId()
  return <div>
    <h1>useId 做 htmlFor</h1>
    <label htmlFor={id}>name</label>
    <input id={id} type="text" />
  </div>
}
export function UseIdExample2() {
  const id = useId()
  return <div>
    <h1>useId 做 htmlFor 前缀</h1>
    <label htmlFor={id + '-name'}>name</label>
    <input id={id + '-name'} type="text" />
    <br /> 
    <label htmlFor={id + '-age'}>age</label>
    <input id={id + '-age'} type="text" />
  </div>
}