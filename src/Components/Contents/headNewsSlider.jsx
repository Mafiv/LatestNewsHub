import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NewsContext } from "../../providers/newsContent";

export default function HeadNewsSlider({ data }) {
  const { mediaStack } = useContext(NewsContext);
  const headerData = mediaStack.data;
  // console.log(mediaStack.data);
  return (
    <div className="relative mt-4">
      {/* Previous Button */}
      <div className="swiper-button-prev custom-prev absolute left-0 z-10 rounded-full bg-gray-300 p-2">
        &#8592;
      </div>

      {/* Next Button */}
      <div className="swiper-button-next custom-next absolute right-0 z-10 rounded-full bg-gray-300 p-2">
        &#8594;
      </div>

      <Swiper
        className="w-[1200px] rounded-md border-2 border-gray-300"
        spaceBetween={50}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={false}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {headerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[450px] w-full bg-green-600 "
              style={{
                backgroundImage: `url(${data.image ? data.image : "/news.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-0 h-auto w-[100%] rounded-lg bg-gradient-to-t from-black to-transparent">
                <h3 className="font-Helvetica px-4 pt-10 text-2xl font-bold tracking-wide text-[#F7F7F4]">
                  {data.title}
                </h3>
                <div className="flex-row-2 font-Helvetica my-4 ml-6 flex gap-4 text-sm text-[#908f8f]">
                  {/* <p>By {headlines[0].source}</p> */}
                  {/* {console.log(data.title)} */}
                  {/* <p>{dateFormat(headlines[0].published_at)}</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  // <div className="embla mt-4 mx-auto">
  //   <div className="embla__viewport w-[1000px] bg-red-400 overflow-hidden" ref={emblaRef}>
  //     <div className="embla__container mx-4 mt-4 h-full w-[100%]">
  //       <div className="embla__slide h-[400px] bg-green-400 lg:rounded-md lg:border lg:border-black lg:shadow-md lg:shadow-black/20 w-[100%]">
  //         Slide 1
  //       </div>
  //       <div className="embla__slide h-[400px] bg-green-400 lg:rounded-md lg:border lg:border-black lg:shadow-md lg:shadow-black/20">
  //         Slide 2
  //       </div>
  //       <div className="embla__slide h-[400px] bg-green-400 lg:rounded-md lg:border lg:border-black lg:shadow-md lg:shadow-black/20">
  //         Slide 3
  //       </div>
  //     </div>
  //   </div>
  //   <button className="embla__prev p-2 bg-gray-700 text-white rounded-full" onClick={scrollPrev} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
  //     &#x25C0;
  //   </button>
  //   <button className="embla__next p-2 bg-gray-700 text-white rounded-full" onClick={scrollNext} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
  //     &#x25B6;
  //   </button>
  // </div>
}
