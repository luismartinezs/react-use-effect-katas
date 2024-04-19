import React, { useState } from 'react';
import { PlanetDetails } from './PlanetDetails';
import Spinner from '@/components/Spinner';

export const PlanetaryDataFetcher = (): React.JSX.Element => {
  const [planets, setPlanets] = useState<any[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [planetDetails, setPlanetDetails] = useState<any>(null);
  const [loadingList, setLoadingList] = useState<boolean>(false)
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false)

  // Data fetching logic to be implemented with useEffect here for planets
  // hint: fetch data from 'https://swapi.dev/api/planets/'
  // Data fetching logic to be implemented with useEffect here for planetDetails based on selectedPlanet
  // hint: fetch data from `https://swapi.dev/api/planets/${selectedPlanet}/`

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Star Wars Planets</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-initial bg-white rounded overflow-auto shadow-lg max-h-96 w-full md:w-1/3">
          <ul className="list-none p-4">
            <li>Planets should load here</li>
            {loadingList && <Spinner />}
            {planets.map((planet, index) => (
              <li key={index}>
                <button className="w-full h-full text-left p-2 hover:bg-primary-100 rounded" onClick={() => setSelectedPlanet(planet.url.match(/(\d+)/)[0])}>
                  {planet.name}
                </button>
              </li>
            ))}          </ul>
        </div>
        {/* PlanetDetails to be rendered when planetDetails state is populated */}
        {planetDetails && <PlanetDetails planetDetails={planetDetails} loading={loadingDetails} />}
      </div>
    </div>
  );
};
