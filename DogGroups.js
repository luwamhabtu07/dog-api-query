import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchDogGroups } from "../api"; // ⬅️ FIXED

const DogGroups = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dogGroups"],
    queryFn: fetchDogGroups,
  });

  if (isLoading) return <p>Loading groups...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dog Groups</h2>
      <ul>
        {data.map((group) => (
          <li key={group.id}>{group.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogGroups;
