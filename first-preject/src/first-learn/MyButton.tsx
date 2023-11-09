import { useState } from 'react'
const isBoolean = true;
export default () => {
  const [count, setCount] = useState(0)
  const buttonInfo = {
    text: 'My Button',
    click: () => {
      setCount(count + 1)
    }
  }
  return <div style={{
    padding: '5px',
    textAlign: 'center'
  }}>
    {isBoolean && <button className="myButton" onClick={buttonInfo.click}>{buttonInfo.text} {count}</button>}
  </div>
}