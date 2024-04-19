import CodeToggle from '@/components/CodeToggle'
import { PlanetaryDataFetcher as Start } from './start'
import { PlanetaryDataFetcher as Finish } from './finish'

const Kata = (): React.JSX.Element => {
  return (
    <>
      <h1 className="mb-2">Planetary data fetcher</h1>
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