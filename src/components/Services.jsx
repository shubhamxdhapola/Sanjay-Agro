import { useState } from "react";
import ServicesCard from "./ServicesCard";
import Slider from "react-slick";

import { serviceCategories } from "../utils/data";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    serviceCategories[0]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleOnClick = (data) => setSelectedCategory(data);

  return (
    <section className="py-18 md:py-15" name="services">
      <div className="mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-12">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2  text-xs sm:text-sm">
            OUR SERVICES
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl text-gray-800 my-4">
            What Services We're Offering
          </h2>
        </div>

        <div className="space-x-9">
          <Slider {...settings}>
            {serviceCategories.map((service, index) => (
              <div key={index} className="">
                <h3
                  className={`p-4 bg-white shadow-sm flex justify-center items-center gap-2 text-center font-semibold rounded-lg cursor-pointer shadow-[0 5px 15px rgba(0,0,0,0.1)] ${
                    selectedCategory.serviceNo === index + 1
                      ? "border-b-4 border-[#4b8b3b] "
                      : ""
                  }`}
                  onClick={() => handleOnClick(service)}
                >
                  <span>{<service.icon size={20} />}</span>
                  <span>{service.title}</span>
                </h3>
              </div>
            ))}
          </Slider>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          {selectedCategory.services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
