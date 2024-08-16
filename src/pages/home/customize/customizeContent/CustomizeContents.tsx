// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const CustomizeContents = () => {
  return (
    <>
      <Swiper
        slidesPerView={3} // Default number of slides
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Adjust based on screen width
          320: {
            slidesPerView: 1, // 1 slide per view on mobile
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // 2 slides per view on small tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on larger screens
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-20 p-5 lg:p-0">
          <h1 className="text-3xl text-center mb-3 font-bold">Keycap Styles</h1>
          <div>
            <img
              className="rounded-lg"
              src="https://i.imgur.com/JHHs0EF.png"
              alt="Keycap Styles"
            />
          </div>
          <p className="mt-3">
            Choose from a variety of keycap materials, profiles, and colors.
          </p>
        </SwiperSlide>
        <SwiperSlide className="mb-20 p-5 lg:p-0">
          <h1 className="text-3xl text-center mb-3 font-bold">Switch Types</h1>
          <div>
            <img
              className="rounded-lg"
              src="https://i.imgur.com/JHHs0EF.png"
              alt="Switch Types"
            />
          </div>
          <p className="mt-3">
            Select your preferred switch type from linear, tactile, or clicky.
          </p>
        </SwiperSlide>
        <SwiperSlide className="mb-20 p-5 lg:p-0">
          <h1 className="text-3xl text-center mb-3 font-bold">RGB Lighting</h1>
          <div>
            <img
              className="rounded-lg"
              src="https://i.imgur.com/JHHs0EF.png"
              alt="RGB Lighting"
            />
          </div>
          <p className="mt-3">
            Customize the RGB lighting patterns and colors for your keyboard.
          </p>
        </SwiperSlide>
        <SwiperSlide className="mb-20 p-5 lg:p-0">
          <h1 className="text-3xl text-center mb-3 font-bold">
            Macro Programming
          </h1>
          <div>
            <img
              className="rounded-lg"
              src="https://i.imgur.com/JHHs0EF.png"
              alt="Macro Programming"
            />
          </div>
          <p className="mt-3">
            Set up custom macros and keybindings for enhanced productivity and
            gaming.
          </p>
        </SwiperSlide>
        <SwiperSlide className="mb-20 p-5 lg:p-0">
          <h1 className="text-3xl text-center mb-3 font-bold">Case Material</h1>
          <div>
            <img
              className="rounded-lg"
              src="https://i.imgur.com/JHHs0EF.png"
              alt="Case Material"
            />
          </div>
          <p className="mt-3">
            Choose your keyboard's case material from plastic, aluminum, or wood
            for a personalized touch.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CustomizeContents;
