import React from "react"; // Don't forget to import React
import { Route, Routes } from "react-router-dom";
import Setting from "../pages/setting";
import Profile from "../pages/profile";
import Chests from "../pages/chests";

const AppRoutes = ({ fetchApiData, chestData, profileData, playerTag, setPlayerTag, response }) => {
  return (
    <Routes>
      <Route path="/" element={<Chests upchests={chestData} />} />
      <Route path="/profile" element={<Profile playerData={profileData} />} />
      <Route
        path="/setting"
        element={
          <Setting
            playerTag={playerTag}
            setPlayerTag={setPlayerTag}
            fetchApiData={fetchApiData}
            response={response}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
