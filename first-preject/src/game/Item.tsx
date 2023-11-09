export default function GameItem({ value, click, state }: { value: 'x' | 'o' | null, click: any, state: boolean }) {
  return <div onClick={click} style={{ background: state ? 'rgb(77,163,234)' : '#fff' }}> {value}</div>
}