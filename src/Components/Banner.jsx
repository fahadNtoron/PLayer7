import React from "react";
import back from "../assets/myAssets/banner-main.png";
// import import '../../App.css'
import logos from "../assets/myAssets/banner-main.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = ({handleCoin}) => {
  const notify0 = () => toast.success("210000 has been added to your account");
  
  return (
    <div className="mt-32">
      <div className="mb-5">
        <div className="p-4 text-white rounded-3xl banner-backk flex flex-col justify-center items-center gap-9 mb-9">
          <img src={logos} alt="" />
          <h3 className="text-3xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h3>
          <p className="text-xl text-gray-700">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border-red-300 border-solid border-2 p-1 rounded-3xl w-max">
            <button onClick={()=>{handleCoin(); notify0()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
              Claim Free Credit
            </button>
          </div>
        </div>
        <div className="flex justify-between mx-16">
          <h3 className="text-3xl font-bold">Availables Players</h3>
          <div className="flex justify-between gap-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-3xl">
              Available
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-3xl">
              Selected
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Banner;
