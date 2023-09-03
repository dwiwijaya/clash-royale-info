import { useState, useEffect } from "react";
import getApiData from "../services/getApiData";

const useApiData = (playerTag,setLoading) => {
  const [profileData, setProfileData] = useState(null);
  const [chestData, setChestData] = useState(null);
  const [response, setResponse] = useState(null);
  const fetchApiData = async () => {

    if (!playerTag) {
      setResponse("Player tag is required.");
      return;
    }

    try {
      const { chestResponse, profileResponse } = await getApiData(playerTag,setLoading);

      // if (!chestResponse.data || !profileResponse.data) {
      //    throw new Error("Player not found");
      // }

      localStorage.setItem("tagname", playerTag);

      setChestData(chestResponse.data.items);
      setProfileData(profileResponse.data);
      setResponse(true);
    } catch (error) {
      setResponse(false);
    }
  };

  useEffect(() => {
    if (playerTag) {
      fetchApiData();
    }
  }, [playerTag]);

  return { profileData, chestData, response, fetchApiData };
};

export default useApiData;
