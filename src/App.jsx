
import "./App.css";
import { useState } from "react";
import AppRoutes from "./router/AppRoutes";
import Header from "./layouts/Header";
import useApiData from "./hooks/ApiHandler";
import "./assets/loader.css";
function App() {
  const [playerTag, setPlayerTag] = useState(
    localStorage.getItem("tagname") || ""
  );
  const [isloading, setLoading] = useState(true);

  const {
    profileData,
    chestData,
    error,
    success,
    fetchApiData,
  } = useApiData(playerTag,setLoading); // Use the hook

  return (
    <div className="App card card-body" >
      <Header></Header>
      <main>
        { isloading ? <div className="loader my-3"></div> : <hr className="text-white"/> }
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
