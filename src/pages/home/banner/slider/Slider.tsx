import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../style/swiper.css";

import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="max-w-[380px] lg:max-w-[650px] mx-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view on mobile
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides per view on small tablets
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2, // 3 slides per view on larger screens
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100  h-[450px]  ">
              <figure>
                <img
                  src="https://i.imgur.com/zoRQyDf.png"
                  className="h-[350px] object-cover"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-2 rounded-md">
                <h2 className="card-title">
                  Mechanical Keyboard X1{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    New Arrival!!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100  h-[450px] ">
              <figure>
                <img
                  src="https://i.imgur.com/8ZpXrnI.png"
                  className="h-[350px] object-cover"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-2 rounded-md">
                <h2 className="card-title">
                  Wireless Ergonomic{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    New Arrival!!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100  h-[450px] ">
              <figure>
                <img
                  src="https://i.imgur.com/ei0Rxa7.png"
                  className="h-[350px] object-cover"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-2 rounded-md">
                <h2 className="card-title">
                  Compact 60% Keyboard{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    New Arrival!!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100 h-[450px] ">
              <figure>
                <img
                  src="https://i.imgur.com/oBPpaMK.png"
                  className="h-[350px] object-cover"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-2 rounded-md">
                <h2 className="card-title">
                  Gaming Keyboard Ultra{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    New Arrival!!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100 h-[450px] ">
              <figure>
                <img
                  src="https://i.imgur.com/JHHs0EF.png"
                  className="h-[350px] object-cover"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-2 rounded-md">
                <h2 className="card-title">
                  Gaming keyboard Avengers{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    New Arrival!!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
