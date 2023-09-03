import axios from "axios";

const getApiData = async (playerTag,setLoading) => {
  console.log(encodeURIComponent(
    playerTag
  ));
  const chestUrl = `${import.meta.env.VITE_API_URL}/api/upcomingchests?tag=${encodeURIComponent(
    playerTag
  )}`;
  const profileUrl = `${import.meta.env.VITE_API_URL}/api/player?tag=${encodeURIComponent(
    playerTag
  )}`;

  try {
    const [chestResponse, profileResponse] = await axios.all([
      axios.get(chestUrl),
      axios.get(profileUrl),
    ]);
    
    setLoading(false);

    return { chestResponse, profileResponse };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getApiData;
