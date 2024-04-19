import CodeToggle from '@/components/CodeToggle'
import { Test as Start } from './start'
import { Test as Finish } from './finish'

const Kata = (): React.JSX.Element => {
  return (
    <>
      <h1 className="mb-2">Test</h1>
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