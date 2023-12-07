import { useSyncExternalStore } from 'react'
function subscribe(callback: any) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe, // 只要传递的是同一个函数，React 不会重新订阅
    () => navigator.onLine ? '有网' : '无网', // 如何在客户端获取值
    () => '有网' // 如何在服务端获取值
  );
}
function createObserver() {
  let list: Array<() => void> = []
  return {
    track(callback: any) {
      list = [...list, callback]
      return () => {

      }
    },
    trigger() {
      list.forEach(fn => fn())
    }
  }
}

let i = 0;
function useObserver() {
  const { track, trigger } = createObserver()
  return {
    state: useSyncExternalStore(track, () => {
      return i
    }, () => {
      return i
    }),
    trigger() {
      i++;
      trigger()
    }
  }
}

export function UseSyncExternalStoreContainer() {
  const { state, trigger } = useObserver()
  const network = useOnlineStatus()
  return <div style={{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '2rem',
    border: '1px solid red',
    margin: '10px 0',
    padding: '0 5px'
  }}>
    当前网络: {network}
    <button onClick={trigger} style={{
      marginLeft:'5px'
    }}> trigger({state})</button>
  </div>
}