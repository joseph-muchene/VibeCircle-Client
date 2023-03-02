// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Card from "./Story";
function Swipe() {
  return (
    <div className="mb-12 hidden  justify-center items-center mx-10 cursor-pointer  md:block">
      <h1 className="text-center my-3 text-2xl">Popular Posts</h1>
      <Swiper
        spaceBetween={3}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipe;
