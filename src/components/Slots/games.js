import "./slots.css"
import Image from "./Image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper";
export default function Games({ x, y, img }) {



    return (<>
        <div className="slots">
            <div className="text"><h1>{x}</h1> <p>TOATE ({y})</p></div>

            <div className="games">

                <Swiper className="games-class"
                    spaceBetween={45}
                    modules={[Autoplay, Navigation]}
                    loop
                    navigation={{ className: "salut" }}
                    autoplay={{ delay: Math.random() * 10000 }}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 768px
                        900: {
                            slidesPerView: 5.5,
                        },
                        780: {
                            slidesPerView: 3,
                        },
                        1700: {
                            slidesPerView: 7.5,
                        },
                    }}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>
                    <SwiperSlide><Image img={img} /></SwiperSlide>

                </Swiper>

            </div>

        </div>
    </>)
}