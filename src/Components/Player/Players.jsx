import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import Selected from "./../Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Players = ({coin}) => {
  const [allPlayer, setAllPlayer] = useState([]);
  const [selected, setSelected] = useState([]);
  const notify2 = (name) => toast.success(`${name} is added`);
  const notify3 = (name) => toast.error(`${name} is alredy added`);
  const notify4 = () => toast.error("You are out of balance");

  useEffect(() => {
    fetch("../../../public/players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayer(data));
  }, []);
  const handleChoose = (ok) => {
    if (selected.includes(ok)) {
      notify3(ok.name);
    } else {
      if(ok.price > {coin}){
        const newSelect = [...selected, ok];
      setSelected(newSelect);
      notify2(ok.name);
      }
      else{
        notify4()
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-32">
        {allPlayer.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleChoose={handleChoose}
          ></Player>
        ))}
      </div>
      <div>
        {selected.map((sel) => (
          <Selected key={sel.id}></Selected>
        ))}
      </div>
      {/* selected cards */}
      <div>
        {selected.map((sel) => (
          <div key={sel.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Players;
