import axios from "axios";

const API_BASE_URL = "https://dogapi.dog/api/v2";

export const fetchBreeds = async () => {
  const response = await axios.get(`${API_BASE_URL}/breeds`);
  return response.data.data;
};

export const fetchDogFacts = async () => {
  const response = await axios.get(`${API_BASE_URL}/facts`);
  return response.data.data;
};

export const fetchDogGroups = async () => {
  const response = await axios.get(`${API_BASE_URL}/groups`);
  return response.data.data;
};

