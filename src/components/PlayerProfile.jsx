// PlayerProfile.js
import React from "react";

const PlayerProfile = (prop = null) => {
  let content = null;
  let player = prop.playerData;
  if (player !== null) {
    content = (
      <div className="text-center text-white">
        <h4>{player.name}</h4>
        <p style={{ fontSize: "smaller", color: "#6bb7f9" }}>{player.tag}</p>
        <div className="details">
          <div className="player-detail">
            <img src={"/xp.png"} alt="" width={20} /> &nbsp;
            {player.expLevel}
          </div>
          <div className="player-detail">
            <div className="arena">
              <img
                src={`/arenas/${player.arena["name"]
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.png`}
                alt={player.arena["name"]}
                className="arena-image"
              />
              <p className=" mb-0">{player.arena["name"]}</p>
            </div>
          </div>
          <div className="player-detail">
            <p className="m-0">Wins : {player.wins}</p>
          </div>
          <div className="player-detail">
            <img src={"/trophy.png"} alt="" width={20} /> &nbsp;
            <span className="m-0" style={{ color: "rgb(253 213 0)" }}>
              {player.trophies}
            </span>
          </div>
        </div>

        <div className="row mt-3 align-items-center">
          <div className="col">
            <hr />
          </div>
          <div className="col-4">
            <h6 className="m-0">Stats Royale</h6>
          </div>
          <div className="col">
            <hr />
          </div>
        </div>
       <div style={{borderRadius : "15px"}} className="card card-body stats mt-3 pb-3">
        <div className="grid-stat">
          <div className="text-start">
            <small className="stat-label">battleCount</small>
            <div className="stat-input"><p className="m-0">{player.battleCount}</p></div>
          </div>
          <div className="text-start">
            <small className="stat-label">threeCrownWins</small>
            <div className="stat-input">{player.threeCrownWins}</div>
          </div>
          <div className="text-start">
            <small className="stat-label">Wins</small>
            <div className="stat-input">{player.wins}</div>
          </div>
          <div className="text-start">
            <small className="stat-label">Losses</small>
            <div className="stat-input">{player.losses}</div>
          </div>
        </div>
       </div>
      </div>
    );
  } else {
    content = <h3 className="text-white">Add your tag on Setting</h3>;
  }
  return content;
};

export default PlayerProfile;
