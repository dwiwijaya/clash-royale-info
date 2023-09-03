import { useState, useEffect } from "react";
import getApiData from "../services/getApiData";

const useApiData = (playerTag,setLoading) => {
  const [profileData, setProfileData] = useState(null);
  const [chestData, setChestData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchApiData = async () => {
    setError(null);
    setChestData(null);
    setProfileData(null);

    if (!playerTag) {
      setError("Player tag is required.");
      return;
    }

    try {
      const { chestResponse, profileResponse } = await getApiData(playerTag,setLoading);

      if (!chestResponse.data || !profileResponse.data) {
        throw new Error("Data not found");
      }
      localStorage.setItem("tagname", playerTag);

      setChestData(chestResponse.data.items);
      setProfileData(profileResponse.data);
      setSuccess("Data found!");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (playerTag) {
      fetchApiData();
    }
  }, [playerTag]);

  return { profileData, chestData, error, success, fetchApiData };
};

export default useApiData;
