import { BiPlay } from "react-icons/bi";
import headerImage from "../assets/header1.jpg";

export default function Header() {
  return (
    <div className="flex ">
      <div className="w-full">
        <img src={headerImage} alt="" className="w-full h-full " />
      </div>
      <div className="">
        <p>find your perfect place to stay</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  );
}
