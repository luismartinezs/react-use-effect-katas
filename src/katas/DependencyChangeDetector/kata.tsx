import CodeToggle from '@/components/CodeToggle'
import {DependencyChangeDetector as Start} from './DependencyChangeDetector_start'
import {DependencyChangeDetector as Finish} from './DependencyChangeDetector_finish'

const kata = (): React.JSX.Element => {
  return (
    <CodeToggle
    start={
      <Start />
    }
    finish={
      <Finish />
    }
      />
  )
}

export default kata