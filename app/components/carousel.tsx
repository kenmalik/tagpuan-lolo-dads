import { Children } from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';

export default function Carousel({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      mousewheel
      modules={[Autoplay, Pagination, Mousewheel]}
      className={className}
    >
      {Children.map(children, (child: any) => (
        <SwiperSlide key={uuidv4()}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
