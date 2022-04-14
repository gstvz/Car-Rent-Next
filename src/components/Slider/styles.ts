import styled from "styled-components";

type isActiveProp = {
  isActive: boolean;
};

type ButtonSideProp = {
  side: string;
};

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 2rem;
  position: relative;
  width: 100%;
`;

export const Slide = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Card = styled.div<isActiveProp>`
  border-radius: 8px;

  ${({ isActive }) =>
    isActive
      ? "background: linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%); height: 20rem; width: 26rem;"
      : "background: linear-gradient(90deg, #c8c8ca 0%, #f3f1fc 100%); height: 16rem; width: 20rem;"}
`;

export const Photo = styled.div<isActiveProp>`
  ${({ isActive }) =>
    isActive
      ? "height: 24rem; width: 30rem; transform: translateX(10%)"
      : "height: 20rem; width: 26rem; transform: translateX(5%)"}
`;

export const SlideButton = styled.button<ButtonSideProp>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text_default};
  border: none;
  border-radius: 50%;
  display: flex;
  height: 4rem;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  width: 4rem;

  ${({ side }) => (side === "left" ? "left: 25%" : "right: 25%")};
`;
