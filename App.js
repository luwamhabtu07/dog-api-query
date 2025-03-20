import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBreeds } from "./api";
import BreedDetails from "./component/BreedDetails";
import DogFacts from "./component/DogFacts";
import DogGroups from "./component/DogGroups";

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dog API Explorer</h1>
      <ul>
        {data.map((breed) => (
          <li key={breed.id} onClick={() => setSelectedBreed(breed.id)}>
            {breed.attributes.name}
          </li>
        ))}
      </ul>

      {selectedBreed && <BreedDetails breedId={selectedBreed} />}
      <DogFacts />
      <DogGroups />
    </div>
  );
};

export default App;
