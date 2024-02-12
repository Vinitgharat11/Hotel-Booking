/* eslint-disable no-unused-vars */
import {
  FaDesktop,
  FaWifi,
  FaParking,
  FaBolt,
  FaSwimmer,
  FaDumbbell,
  FaSwimmingPool,
} from "react-icons/fa";
import { BsCupHot, BsThreeDots } from "react-icons/bs";

const icons = [
  {
    id: 1,
    name: "Private workspace",
    url: "/",
    icon: FaDesktop,
  },
  {
    id: 2,
    name: "Parking Area",
    url: "/",
    icon: FaParking,
  },
  {
    id: 3,
    name: "Breakfast",
    url: "/",
    icon: BsCupHot,
  },
  {
    id: 4,
    name: "Free Wifi",
    url: "/",
    icon: FaWifi,
  },
  {
    id: 5,
    name: "Free Electricity",
    url: "/",
    icon: FaBolt,
  },
  {
    id: 6,
    name: "Swimming Pool",
    url: "/",
    icon: FaSwimmingPool,
  },
  {
    id: 7,
    name: "Exercise Space",
    url: "/",
    icon: FaDumbbell,
  },
  {
    id: 8,
    name: "other service",
    url: "/",
    icon: BsThreeDots,
  },
];

export default function Services() {
  return (
    <div className="justify-start md:flex">
      <div className="flex flex-col items-center justify-center pt-8 mx-10 my-8 md:w-[30rem]">
        <p className="py-4 my-2 text-3xl font-bold text-center md:text-4xl md:text-start ">
          We do our best facilities provide you
        </p>
        <p className="text-[10px] text-center text-primary-btn md:text-start md:py-3 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy{" "}
        </p>
        <button className="px-6 py-3 my-3 text-xs rounded-full bg-primary-btn text-primary-white">
          contact Now
        </button>
      </div>
      <div className="grid items-center justify-center grid-cols-2 md:my-7 md:grid-cols-4 md:mx-6 ">
        {icons.map((icon) => (
          <div key={icon.id} className="flex flex-col items-center justify-center p-5 m-4 shadow-md hover:shadow-2xl">
            <icon.icon size={35} style={{color:"green"}}  />
            <p className="my-3 text-sm">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
