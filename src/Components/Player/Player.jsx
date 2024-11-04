import React from "react";
import ppicon from "../../assets/myAssets/ppic.png";
import flag from "../../assets/myAssets/flag.png";
import parseHslLegacy from "./../../../node_modules/culori/src/hsl/parseHslLegacy";

const Player = ({ player, handleChoose, added }) => {
  const { player_img, hand, method, name, price, country, rating } = player;
  return (
    <div>
      <div className="m-10">
        <div>
          <div className=" bg-gray-300 shadow-xl p-2 rounded-3xl">
            <figure>
              <img className="rounded-3xl" src={player_img} alt="player img" />
            </figure>
            <div className="p-2">
              <h2 className="flex items-center gap-1 mt-2 text-gray-600">
                <img className="w-5" src={ppicon} alt="" />
                <div>{name}</div>
              </h2>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-1">
                  <img className="w-5" src={flag} alt="" />{" "}
                  <p className="w-28">{country}</p>{" "}
                </div>
                <div className="bg-gray-400 rounded-md p-2">{method}</div>
              </div>
              <p className="mb-2 mt-2">Rating:{rating}</p>
              <div className="mt-2 flex justify-between">
                <div>Batitg Bowling Hand:</div>
                <div className="text-gray-600">{hand}</div>
              </div>
              <div className="">
                <div className="mt-2 flex justify-between items-center">
                  <div>Price: {price}</div>
                  <button
                    onClick={() => handleChoose(player)}
                    className="btn rounded-xl"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
