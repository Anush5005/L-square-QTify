import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./card";
import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { ReactComponent as LeftIcon } from "./leftnav.svg";
// import { ReactComponent as RightIcon } from "./rightnav.svg";
function Carousel({ data }) {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={8}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        // navigation={true}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="arrow-left arrow">
        <img src="leftnav.png" alt="navicon" />
      </div>
      <div className="arrow-right arrow">
        <img src="rightnav.png" alt="navicon" />
      </div>
    </div>
  );
}

export default Carousel;
