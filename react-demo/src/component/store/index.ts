import { createStore } from './core'
type actionType = { type: 'setName', name: string } | { type: 'setAge', age: number }
const state = {
  user: {
    name: '',
    age: 19
  }
}
const { StoreProvider, useDispatch, useStore } = createStore<actionType, typeof state>(state, (state, action: actionType) => {
  switch (action.type) {
    case 'setName':
      return { ...state, user: { ...state.user, name: action.name } }
    case 'setAge':
      return { ...state, user: { ...state.user, age: action.age } }
  }
})
export { StoreProvider, useDispatch, useStore }