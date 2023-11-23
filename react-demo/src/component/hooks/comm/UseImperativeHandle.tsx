import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

export function UseImperativeHandleContainer() {
  return <div className="wrap">
    <Parent />
  </div>
}
type handleType = { ccc: () => void }
export function Parent() {
  const ref = useRef<handleType>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.ccc()
    }
  }, [])
  return <div>
    <Children1 ref={ref} age={18} />
  </div>
}

// forwardRef 定义了 handleTypes 和 props 类型
const Children1 = forwardRef<handleType, { age: number }>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      ccc() {
        console.log('123')
      }
    }
  })
  return <>div</>
})