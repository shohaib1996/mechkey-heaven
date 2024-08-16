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
                <img src="https://i.imgur.com/hmMZ1Ig.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100  h-[450px] ">
              <figure>
                <img src="https://i.imgur.com/hmMZ1Ig.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100  h-[450px] ">
              <figure>
                <img src="https://i.imgur.com/hmMZ1Ig.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100 h-[450px] ">
              <figure>
                <img src="https://i.imgur.com/hmMZ1Ig.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 lg:mb-20">
            <div className="card bg-base-100 h-[450px] ">
              <figure>
                <img src="https://i.imgur.com/hmMZ1Ig.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
