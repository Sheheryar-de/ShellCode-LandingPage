import map from "../assets/map.svg";
import user from "../assets/images/user.png";
import Tesmonial from "./UI/Tesmonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function Clients() {
  return (
    <div className="bg-[rgba(0,0,0,1)] relative w-full h-[auto] md:min-h-[846px]  overflow-hidden">
      <div className=" relative mx-auto w-full h-full">
        <img
          src={map}
          alt="map"
          className="w-[1100px] h-[374px] absolute top-[260px] left-[130px] 2xl:left-[170px]"
        />
        <div className="pt-12 w-[1026px] mx-auto">
          <p className="uppercase text-center text-[12px] md:text-[20px] tracking-[6px] text-[rgba(224,224,224,1)]">
            Testimonials
          </p>
          <h1
            style={{ fontFamily: "clashMedium" }}
            className="text-gradient text-[25px] md:text-[62px] leading-[25px] mt-4 px-1 md:leading-[76px] text-center"
          >
            Don’t take our word for it. Here are the people who trust us.
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          centeredSlides={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.3,
            },
            1024: {
              slidesPerView: 1.5,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper px-8"
        >
          {arr.map((data) => (
            <SwiperSlide key={data.id} className=" pb-[50px]">
              <Tesmonial
                user={data.userPic}
                name={data.name}
                title={data.title}
                comment={data.comment}
                desc={data.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;

const arr = [
  {
    id: 1,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 2,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 3,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 4,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 5,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
];
