import headerImage from "../assets/header.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaLocationDot, FaCalendarDay, FaUserLarge } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <div className="relative flex p-10 pt-10 mx-16 header-container w-[100%]">
        <div className="lg:w-[50%] bg-[#fbfffb] ">
          <h4 className="text-[64px] px-10 mx-5 mt-10 font-medium ">
            Find your perfect place to stay
          </h4>
          <p className="px-10 mx-5 mt-5 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex items-center gap-2 px-10 mx-5 mt-5">
            <FaRegPlayCircle style={{ color: "green" }} />
            <p>Watch video</p>
          </div>
        </div>
        <div className="lg:w-[50%] hidden">
          <img
            src={headerImage}
            alt="header-image"
            className="rounded-tr-[40px]  "
          />
        </div>
        <div className="absolute flex gap-10 rounded-full shadow-lg right-[20rem] bottom-20 bg-primary-white">
          <div className="flex items-center gap-2 ml-10">
            <FaLocationDot style={{ color: "green" }} />
            <p>location</p>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarDay style={{ color: "green" }} />
            <p>check-in</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarDay style={{ color: "green" }} />
            <p>check-out</p>
          </div>
          <div className="flex items-center gap-2">
            <FaUserLarge style={{ color: "green" }} />
            <p>rooms for</p>
          </div>
          <div className="">
            <button className="px-16 py-10 rounded-full bg-primary-btn text-primary-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
