// PlayerProfile.js
import React from "react";
import PlayerDetail from "../components/PlayerDetail";
import DetailSeparator from "../components/DetailSeparator";

const PlayerProfile = (prop = null) => {
  let content = null;
  let player = prop.playerData;
  if (player !== null) {
    content = (
      <div className="text-center text-white">
        <h4 style={{ textShadow: "1px 2px black" }}>{player.name}</h4>
        <p style={{ fontSize: "smaller", color: "#6bb7f9", textShadow: "1px 1px 1px black" }}>{player.tag}</p>
        <div className="details">
          <PlayerDetail content={player.expLevel} image={"/xp.png"} />
          <div className="player-detail">
            <div className="glass-effect"></div>
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
          <PlayerDetail content={player.wins} label={"Battles Won"} />
          <PlayerDetail content={player.trophies} image={"/trophy.png"} />
        </div>

        <DetailSeparator title={"Legacy Best"} />
        <div className="d-flex justify-content-center  mb-3">
          <div className="relative player-detail leg-trophy">
          <div className="glass-effect"></div>
            <img src="/trophy.png" alt="" className="s" width={30} />
            <div className="player-detail d-flex align-items-center ps-4 ms-4 mt-1 me-1">{player.bestTrophies}</div>
          </div>
        </div>
        <div className="desc mx-3">Your Best achievments from the old Trophy Road League</div>
        <DetailSeparator title={"Stats Royale"} />
        <div className="details">
          <PlayerDetail content={player.battleCount} label={"Battles Count"} />
          <PlayerDetail content={player.threeCrownWins} label={"3 Crown Wins"} />
          <PlayerDetail content={player.wins} label={"Battles Won"} />
          <PlayerDetail content={player.losses} label={"Battles Loss"} />
        </div>
      </div>
    );
  } else {
    content = <h3 className="text-white text-shadow">Set your player tag in the settings.</h3>;
  }
  return content;
};

export default PlayerProfile;
