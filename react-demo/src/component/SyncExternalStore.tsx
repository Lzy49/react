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
  return useSyncExternalStore(
    subscribe, // 只要传递的是同一个函数，React 不会重新订阅
    () => navigator.onLine ? '有网' : '无网', // 如何在客户端获取值
    () => '有网' // 如何在服务端获取值
  );
}
export function SyncExternalStoreContainer() {
  const isOnly = useOnlineStatus()
  return <div>123{isOnly}</div>
}