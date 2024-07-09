import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../style/swiper.css";

import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-20">
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
        <SwiperSlide className="mb-20">
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
        <SwiperSlide className="mb-20">
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
        <SwiperSlide className="mb-20">
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
        <SwiperSlide className="mb-20">
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
      </Swiper>
    </div>
  );
};

export default Slider;
