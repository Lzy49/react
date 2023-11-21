import { useDebugValue } from "react";
// 为自定义 hooks 增加 调试
import { useSyncExternalStore } from "react";

function subscribe(callback: any) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
function useOnlineStatus() {
  const state = useSyncExternalStore(
    subscribe, // 只要传递的是同一个函数，React 不会重新订阅
    () => navigator.onLine, // 如何在客户端获取值
    () => true // 如何在服务端获取值
  );
  useDebugValue(state, (d) => d ? '在线' : '离线'); // 增加 自定义 hooks 可调试性
  return state
}
export function UseDebugValue() {
  const state = useOnlineStatus()
  return <div>
    <h1>useDebugValue</h1>
    <p>当前网络状态是 {state ? '有网' : '无网'}</p>
  </div>
}