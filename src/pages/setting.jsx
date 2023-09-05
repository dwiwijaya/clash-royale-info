import React from "react";

const Settings = ({ playerTag, setPlayerTag, fetchApiData, response }) => {
  return (
    <div>
      <div className="d-flex gap-2 mb-4">
        <input
          style={{ fontSize: "smaller", letterSpacing: ".4px" }}
          className="form-control input-tag"
          type="text"
          value={playerTag}
          onChange={(e) =>
            setPlayerTag(e.target.value.replace(/[^a-zA-Z0-9#]/g, "").toUpperCase())
          }
          placeholder="Enter Player Tag"
        />
        <button className="btn-cr" onClick={fetchApiData}>
          Check
        </button>
      </div>
      <p className="text-white text-shadow">
        <i
          className={`fa-solid fa-circle-${response ? "check" : "exclamation"}`}
        ></i>
        &nbsp; Account {response ? "Found" : "Not Found"} !
      </p>
    </div>
  );
};

export default Settings;
