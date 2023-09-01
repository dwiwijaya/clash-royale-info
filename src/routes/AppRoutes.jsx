import React from "react"; // Don't forget to import React
import { Route, Routes } from "react-router-dom";
import Settings from "../components/Settings";
import PlayerProfile from "../components/PlayerProfile";
import UpcomingChest from "../components/UpcomingChest";

const AppRoutes = ({ fetchApiData, chestData, profileData, playerTag, setPlayerTag, error, success }) => {
  return (
    <Routes>
      <Route path="/" element={<UpcomingChest upchests={chestData} />} />
      <Route path="/profile" element={<PlayerProfile playerData={profileData} />} />
      <Route
        path="/setting"
        element={
          <Settings
            playerTag={playerTag}
            setPlayerTag={setPlayerTag}
            fetchApiData={fetchApiData}
            error={error}
            success={success}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
