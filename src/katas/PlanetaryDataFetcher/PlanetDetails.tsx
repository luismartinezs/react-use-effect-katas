import Spinner from '@/components/Spinner'

export const PlanetDetails = ({ planetDetails, loading }: { planetDetails: any; loading?: boolean }) => (
  <div className="flex-grow bg-white rounded shadow-lg p-6">
    {loading ? (
      <Spinner />
    ) : (
      <>
        <h2 className="text-2xl font-semibold mb-4">{planetDetails.name}</h2>
        <p className="text-lg">Population: {planetDetails.population}</p>
        <p className="text-lg">Climate: {planetDetails.climate}</p>
        <p className="text-lg">Terrain: {planetDetails.terrain}</p>
        <p className="text-lg">Gravity: {planetDetails.gravity}</p>
        <p className="text-lg">Orbital Period: {planetDetails.orbital_period}</p>
        <p className="text-lg">Rotation Period: {planetDetails.rotation_period}</p>
        <p className="text-lg">Diameter: {planetDetails.diameter}</p>
      </>
    )}
  </div>
)
