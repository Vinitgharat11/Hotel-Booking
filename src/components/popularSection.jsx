import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import popularHotel1 from "../assets/popular-1.jpg";
import popularHotel2 from "../assets/popular-2.jpg";
import popularHotel3 from "../assets/popular-3.jpg";

export default function PopularSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 gap-y-2 md:hidden">
        <h4 className="text-3xl font-semibold text-center ">
          Our Most Popular hotels
        </h4>
        <p className="text-xs w-80 text-primary-btn">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="hidden">View All</button>
        <Carousel
          autoPlay={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          interval={3500}
          infiniteLoop={true}
          width={400}
        >
          <div className="px-10 ">
            <div className="w-[18rem]  pt-5">
              <img
                src={popularHotel1}
                alt=""
                className="w-full h-[12rem] object-cover "
              />
            </div>
            <div className="px-1 pb-2 text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-4">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
          <div className="px-10 ">
            <div className="w-[18rem] pt-5">
              <img
                src={popularHotel2}
                alt=""
                className="w-full h-[12rem] object-cover "
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-5">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
          <div className="px-10 ">
            <div className="w-[18rem]  pt-5">
              <img
                src={popularHotel3}
                alt=""
                className="w-full h-[12rem] object-cover "
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-5">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* desktop version */}
      <div className="flex-col hidden overflow-x-hidden md:flex">
        <h4 className="mx-10 my-3 text-4xl font-semibold">Our Most Popular hotels</h4>
        <p className="mx-10 text-xs w-80 text-primary-btn">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex">
          <div className="px-10 ">
            <div className="w-[14rem] pt-5 lg:w-[24rem] ">
              <img
                src={popularHotel1}
                alt=""
                className="w-full h-[14rem] object-cover rounded-t-2xl "
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-5">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
          <div className="px-10 ">
            <div className="w-[14rem] pt-5 lg:w-[24rem]">
              <img
                src={popularHotel2}
                alt=""
                className="w-full h-[14rem] object-cover rounded-t-2xl "
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-5">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
          <div className="px-10 ">
            <div className="w-[14rem] pt-5 lg:w-[24rem]">
              <img
                src={popularHotel3}
                alt=""
                className="w-full h-[14rem] object-cover rounded-t-2xl"
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-xs text-primary-btn">
                London NW8 7JT England
              </p>
              <h3 className="text-lg">Danubius Hotel Regents Park</h3>
              <div className="flex justify-between pt-2 mr-5">
                <p>$200 per night</p>
                <p>rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
