import type { CSSProperties } from 'react'

type FooProps = {
  bar: string
  tag: string
  total: number
  onShow: () => void
  onFinish: () => void
  data: Record<string, number>[]
  foo: {
    bar: string
  }
  style?: CSSProperties
  className?: string
}

const Foo = (props: FooProps) => {
  return <div {...props}>dd</div>
}

export default Foo
