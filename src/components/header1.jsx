import headerImage from "../assets/header.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";

export default function Header1() {
  return (
    <>
      <div className="lg:flex ">
        <div className="">
          <h4 className="px-6 py-4 text-2xl text-center capitalize">
            find your perfect place to stay
          </h4>
          <p className="hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="">
          {/* <img src={headerImage} alt="" className="scale-x-125" /> */}
        </div>
        <div className="">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            <div className="h-56 p-3 m-5 border rounded-lg">
              <img src={hotel1} className="object-cover w-full h-full border-2" />
            </div>
            <div className="h-56 p-3 m-5 border rounded-lg">
              <img src={hotel2} className="object-cover w-full h-full border-2 " />
            </div>
            <div className="h-56 p-3 m-5 border rounded-lg">
              <img src={hotel3} className="object-cover w-full h-full border-2 " />
            </div>
          </Carousel>
            
        </div>
      </div>
    </>
  );
}
