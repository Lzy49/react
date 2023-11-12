import { StoreProvider, useDispatch, useStore } from './store'
export function ReducerContextContainer() {
  return <>
    <StoreProvider >
      <ShowInfo />
      <ChangeInfo />
    </StoreProvider>
  </>
}
export function ShowInfo() {
  const info = useStore()
  return <>{info.user.name} {info.user.age}</>
}
export function ChangeInfo() {
  const dispatch = useDispatch()
  const state = useStore()
  return <>
    <button onClick={() => dispatch({
      type: 'setName',
      name: '小青'
    })}>修改名字为 小青</button>
    <button onClick={() => dispatch({
      type: "setAge",
      age: state.user.age + 1
    })}>年纪 +1</button>
  </>
}