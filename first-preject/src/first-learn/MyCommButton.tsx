export default ({ count, setCount }: { count: number, setCount: any}) => {
  return <button onClick={setCount}>处理 {count}</button>
}