import SHIMER_IMG from "../utils/Shimer_IMG.jpg";

const Shimer = () => {
  return (
    <div className="h-80 w-[180px] md:w-[300px] mb-2 md:m-5 p-2 border-2 border-white bg-rose-50 rounded-lg cursor-pointer hover:border-2 hover:w-[300px] hover:shadow-lg hover:border-gray-300">
      <div className="h-[65%]  overflow-hidden">
        <img className="rounded-md" alt="resImg" src={SHIMER_IMG} />
      </div>
      <div className="flex justify-between mt-3 h-7 overflow-hidden">
        <div className="w-[70%] bg-pink-200"></div>
        <div className="bg-pink-200 w-[20%] rounded-md"></div>
      </div>
      <div className="flex justify-between mt-1 h-5 overflow-hidden">
        <div className="w-[72%] bg-pink-200"></div>
        <div className="w-[26%] bg-pink-200"></div>
      </div>
      <div className=" h-5 bg-pink-200 mt-1 "></div>
    </div>
  );
};

export default Shimer;
