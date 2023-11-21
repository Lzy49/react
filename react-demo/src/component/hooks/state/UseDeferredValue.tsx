
import { useState, useDeferredValue, memo } from "react"

const SlowList = memo(({ text }: any)=> {

  console.log("render--")

  let items = [];

  for (let i = 0; i < 250; i++) {

    let startTime = performance.now();

    while (performance.now() - startTime < 1) {
      // 通过循环阻塞来模拟极慢的代码
    }

    items.push(text);

  }

  return (
    <ul>
      {
        items.map((item, index) => {
          return <li key={index}>Text:{item}</li>
        })
      }
    </ul>
  );

});

function App() {
  const [value, setValue] = useState();
  const deferredText = useDeferredValue(value);
  
  const change = (e: any) => {
    setValue(e.target.value)
    console.log("value",value);
    console.log("deferredText",deferredText);
  }

  return (
    <>
      <input type="text" onChange={change} />
      {/* 啥也不传因为 memo，SlowList 并不会执行 <SlowList /> */}
      {/* 使用 useDeferredValue：<SlowList text={deferredText} /> */}
      没有使用 useDeferredValue：<SlowList text={value} />

    </>
  );
}

export default App
