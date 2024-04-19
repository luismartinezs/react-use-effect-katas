import CodeToggle from '@/components/CodeToggle'
import { SubUnsub as Start } from './start'
import { SubUnsub as Finish } from './finish'

const Kata = (): React.JSX.Element => {
  return (
    <>
      <h1 className="mb-2">Sub unsub</h1>
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