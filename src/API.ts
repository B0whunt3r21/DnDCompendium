const BASE_URL = 'https://dnd5eapi.co/api/2024';


export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch failed for ${endpoint}:`, error);
    throw error;
  }
};

export const getImageLink = (endpoint: string) => {
  return `https://dnd5eapi.co${endpoint}`;
};

