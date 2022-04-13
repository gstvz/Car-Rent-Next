import * as S from "./styles";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarColors } from "@types";

type Props = {
  activeColor: number;
  colors: CarColors[];
  handleSlideClick: (index: number) => void;
};

export const Slider = ({ activeColor, colors, handleSlideClick }: Props) => {
  return (
    <S.Container>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={200}
        centeredSlides
        loop
        navigation
        slideToClickedSlide
        onTransitionEnd={(swiper) => handleSlideClick(swiper.realIndex)}
      >
        {colors.map((color, index) => (
          <SwiperSlide key={index}>
            <S.Card isActive={activeColor === index}>
              <S.Photo isActive={activeColor === index}>
                <Image src={color.photo} alt="Car" height={240} width={400} />
              </S.Photo>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};
