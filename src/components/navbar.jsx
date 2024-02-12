import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const MenuItems = [
  { id: 1, item: "Booking", Url: "/" },
  { id: 2, item: "Facilities", Url: "/" },
  { id: 3, item: "About-us", Url: "/" },
  { id: 4, item: "Location", Url: "/" },
  { id: 5, item: "Contact", Url: "/" },
];

export default function Navbar() {
  const [showNavIcon, setShowNavIcon] = useState(false);
  const onClick = () => {
    setShowNavIcon(!showNavIcon);
  };

  return (
    <>
      <div className="flex justify-between px-4 py-2 shadow-lg lg:hidden">
        <div className="">
          <p className="text-lg font-bold text-primary-btn ">Logo</p>
        </div>
        <div className="flex items-center">
          {showNavIcon ? (
            <BiMenu size={30} style={{ color: "green" }} onClick={onClick} />
          ) : (
            <BiX size={30} style={{ color: "green" }} onClick={onClick} />
          )}
        </div>
      </div>
      {!showNavIcon && (
        <div className="flex flex-col items-end justify-end mr-5 lg:hidden">
          {MenuItems.map((items) => (
            <div className="py-1" key={items.id}>
              <p>{items.item}</p>
            </div>
          ))}
        </div>
      )}

      <div className="justify-center hidden mt-4 lg:flex">
        <div className="w-[80vw] h-10  flex gap-5 justify-center items-center ml-10">
          {MenuItems.map((items) => (
            <div className="py-1" key={items.id}>
              <p>{items.item}</p>
            </div>
          ))}
        </div>
        <div className="w-[10vw] h-10 ">
          <button className="py-3 rounded-full px-7 bg-primary-btn text-primary-white">login</button>
        </div>
      </div>
    </>
  );
}
