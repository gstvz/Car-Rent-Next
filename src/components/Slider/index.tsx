import * as S from "./styles";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarColors } from "@types";
import { IoArrowBack, IoArrowForward } from "@icons";
import { useTheme } from "styled-components";
import { useRef } from "react";

type Props = {
  activeColor: number;
  colors: CarColors[];
  handleSlideClick: (index: number) => void;
};

export const Slider = ({ activeColor, colors, handleSlideClick }: Props) => {
  const btnNext = useRef<HTMLButtonElement>(null);
  const btnPrev = useRef<HTMLButtonElement>(null);
  const theme = useTheme();

  return (
    <S.Container>
      <S.SlideButton ref={btnPrev} side="left">
        <IoArrowBack size={20} color={theme.colors.background_primary} />
      </S.SlideButton>
      <S.SlideButton ref={btnNext} side="right">
        <IoArrowForward size={20} color={theme.colors.background_primary} />
      </S.SlideButton>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides
        loop
        navigation={{
          prevEl: btnPrev.current,
          nextEl: btnNext.current,
        }}
        slideToClickedSlide
        onTransitionEnd={(swiper) => handleSlideClick(swiper.realIndex)}
      >
        {colors.map((color, index) => (
          <SwiperSlide key={index}>
            <S.Slide>
              <S.Card isActive={activeColor === index}>
                <S.Photo isActive={activeColor === index}>
                  <Image src={color.photo} alt="Car" height={240} width={400} />
                </S.Photo>
              </S.Card>
            </S.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};
