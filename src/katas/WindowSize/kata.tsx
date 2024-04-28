import CodeToggle from '@/components/CodeToggle'
import { WindowSize as Start } from './start'
import { WindowSize as Finish } from './finish'

const Kata = (): React.JSX.Element => {
  return (
    <>
      <h1 className="mb-2">Window size</h1>
      <CodeToggle
      start={
        <Start />
      }
      finish={
        <Finish />
      }
        />
    </>
  )
}

export default Kata