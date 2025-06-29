import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-14 pb-32 lg:pb-36" name="home">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="md:w-1/2 md:pe-3 lg:pe-5">
          <h1 className="text-gray-800 mb-4 text-center md:text-left font-extrabold tracking-tight leading-none text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl">
            Rooted in Service, Growing with{" "}
            <span className="text-[#4b8b3b]">Farmers</span>
          </h1>
          <p className="mb-6 text-center md:text-left lg:mb-8 text-sm lg:text-lg">
            Farm-Fresh Goodness, Tailored Services, and Unique Specialties — All
            in One Place. From daily essentials to premium pets and personalized
            care, we deliver trust with every product.
          </p>
          <div className="text-center md:text-left">
            <button className="px-3 py-2 text-sm  lg:text-md lg:px-5 lg:py-3 text-center text-white rounded-lg bg-[#4b8b3b] mr-3">
              Get started
            </button>
            <button className="px-3 py-2 text-sm lg:text-md lg:px-5 lg:py-3 text-center border-[#4b8b3b] border rounded-lg">
              Special Offer
            </button>
          </div>
        </div>
        <div className="md:w-1/2 pe-0 md:p-4 lg:p-10">
          <img src="/farm.png" alt="heroimage" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
