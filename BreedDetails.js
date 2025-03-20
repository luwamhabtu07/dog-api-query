import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBreedDetails = async (breedId) => {
  const response = await axios.get(`https://dogapi.dog/api/v2/breeds/${breedId}`);
  return response.data.data;
};

const BreedDetails = ({ breedId }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["breedDetails", breedId],
    queryFn: () => fetchBreedDetails(breedId),
    enabled: !!breedId, // Only fetch if breedId is provided
  });

  if (isLoading) return <p>Loading breed details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.attributes.name}</h2>
      <p>{data.attributes.description}</p>
      <p>Group: {data.attributes.group}</p>
    </div>
  );
};

export default BreedDetails;
