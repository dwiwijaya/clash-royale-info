import React from "react";

const Settings = ({ playerTag, setPlayerTag, fetchApiData,error,success  }) => {
  return (
    <div>
      <div className="d-flex gap-2 mb-4">
        <input
        style={{fontSize : "smaller",letterSpacing : ".4px"}}
          className="form-control"
          type="text"
          value={playerTag}
          onChange={(e) => setPlayerTag(e.target.value)}
          placeholder="Enter Player Tag"
        />
        <button className="btn-cr" onClick={fetchApiData}>
          Check
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-white">{success}</p>}
    </div>
  );
};

export default Settings;
