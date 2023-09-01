
import "./App.css";
import { useState } from "react";
import AppRoutes from "./routes/routes";
import Header from "./layouts/Header";
import useApiData from "./hooks/ApiHandler";

function App() {
  const [playerTag, setPlayerTag] = useState(
    localStorage.getItem("tagname") || ""
  );

  const {
    profileData,
    chestData,
    error,
    success,
    fetchApiData,
  } = useApiData(playerTag); // Use the hook

  return (
    <div className="App card card-body" >
      <Header></Header>
      <main>
        <hr className="text-white" />
        <AppRoutes
          fetchApiData={fetchApiData}
          chestData={chestData}
          profileData={profileData}
          playerTag={playerTag}
          setPlayerTag={setPlayerTag}
          success={success}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
