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
      <div className="items-center justify-between hidden h-10 mt-3 ml-16 sm:flex lg:ml-80 xl:ml-[40rem]">
        <div className="flex items-center justify-around h-6 gap-5 ml-16">
          {MenuItems.map((links) => (
            <p key={links.id}>{links.item}</p>
          ))}
        </div>
        <div className="px-5 py-2 mx-4 text-sm bg-primary-btn text-primary-white rounded-3xl">
          <button>Login</button>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 shadow-md bg-primary-white sm:hidden">
        <p className="ml-4 text-primary-btn">LOGO</p>
        <BiMenu
          size={35}
          className="ml-4 text-primary-btn"
          onClick={onClick}
          style={{
            display: showNavIcon ? "none" : "block",
          }}
        />
        <BiX
          size={35}
          className="ml-4 text-primary-btn"
          onClick={onClick}
          style={{
            display: showNavIcon ? "block" : "none",
          }}
        />
      </div>
      {showNavIcon && (
        <div className="flex flex-col items-end justify-center mt-2 mr-6 gap-y-4 ">
          {MenuItems.map((links) => (
            <p key={links.id}>{links.item}</p>
          ))}
        </div>
      )}
    </>
  );
}
