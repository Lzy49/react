import { createContext, useContext, useReducer } from 'react';
export function createStore<A, T>(state: T, action: (state: T, action: any) => T) {
  const StoreContext = createContext<T>(state);
  const DispatchContext = createContext<React.Dispatch<A>>((state) => state);
  function StoreProvider({ children }: any) {
    const [tasks, dispatch] = useReducer(action, state);
    return (
      <StoreContext.Provider value={tasks}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StoreContext.Provider>
    );
  }

  function useStore() {
    return useContext(StoreContext);
  }

  function useDispatch() {
    return useContext(DispatchContext);
  }

  return { useStore, useDispatch, StoreProvider }
}