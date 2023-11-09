export default () => {
  const list = [
    { title: '你好1', text: '内容' },
    { title: '你好2', text: '内容' },
    { title: '你好3', text: '内容' },
    { title: '你好4', text: '内容' },
    { title: '你好5', text: '内容' },
  ]
  return <>
    {
      list.map(item => <div key={item.title}>{item.title} : {item.text}</div>)
    }
  </>
}