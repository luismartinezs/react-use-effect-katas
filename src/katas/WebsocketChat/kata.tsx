import CodeToggle from '@/components/CodeToggle'
import { WebsocketChat as Start } from './start'
import { WebsocketChat as Finish } from './finish'

const Kata = (): React.JSX.Element => {
  return (
    <>
      <h1 className="mb-2">Websocket chat</h1>
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