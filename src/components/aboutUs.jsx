import aboutImage from '../assets/componentImage.jpg'


export default function AboutUs() {
  return (
    <div className=' md:flex'>
      <div className="px-5 pt-2 md:w-[70rem] rounded-lg">
        <img src={aboutImage} alt="" className='w-full h-full  rounded-lg md:p-6 md:rounded-[50px]' />
      </div>
      <div className="flex flex-col items-center px-5 md:m-10 md:items-start">
        <h3 className="mb-5 text-2xl font-bold capitalize md:text-start md:pt-10 md:text-4xl">Discover our History</h3>
        <p className="mx-5 my-2 text-xs text-center md:mx-1 md:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{" "}
        </p>
        <p className="mx-5 my-2 text-xs text-center md:mx-1 md:text-start ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.
        </p>
        <button className='px-10 py-3 my-5 text-xs rounded-full text-primary-white bg-primary-btn'>Explore Now</button>
      </div>
    </div>
  );
}
