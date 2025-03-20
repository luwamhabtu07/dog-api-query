import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchDogFacts } from "../api"; // ⬅️ FIXED

const DogFacts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dogFacts"],
    queryFn: fetchDogFacts,
  });

  if (isLoading) return <p>Loading facts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dog Facts</h2>
      <ul>
        {data.map((fact) => (
          <li key={fact.id}>{fact.attributes.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogFacts;
