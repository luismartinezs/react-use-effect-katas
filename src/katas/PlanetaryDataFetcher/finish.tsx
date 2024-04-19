import React, { useState, useEffect } from 'react'
import { PlanetDetails } from './PlanetDetails'
import Spinner from '@/components/Spinner'

export const PlanetaryDataFetcher = (): React.JSX.Element => {
  const [planets, setPlanets] = useState<any[]>([])
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const [planetDetails, setPlanetDetails] = useState<any>(null)
  const [loadingList, setLoadingList] = useState<boolean>(true)
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false)

  // Fetch list of planets on mount
  useEffect(() => {
    setLoadingList(true)
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoadingList(false))
  }, [])

  // Fetch details of selected planet
  useEffect(() => {
    if (selectedPlanet) {
      setLoadingDetails(true)
      fetch(`https://swapi.dev/api/planets/${selectedPlanet}/`)
        .then((response) => response.json())
        .then((data) => setPlanetDetails(data))
        .catch((error) => console.error(error))
        .finally(() => setLoadingDetails(false))
    }
  }, [selectedPlanet])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Star Wars Planets</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-initial bg-white rounded overflow-auto shadow-lg max-h-96 w-full md:w-1/3">
          <ul className="list-none p-4">
            {loadingList && <Spinner />}
            {planets.map((planet, index) => (
              <li key={index}>
                <button className="w-full h-full text-left p-2 hover:bg-primary-100 rounded" onClick={() => setSelectedPlanet(planet.url.match(/(\d+)/)[0])}>
                  {planet.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {planetDetails && <PlanetDetails planetDetails={planetDetails} loading={loadingDetails} />}
      </div>
    </div>
  )
}
