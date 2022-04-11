import styled from "styled-components";

type HoverProp = {
  isHovering: boolean;
};

export const Card = styled.li<HoverProp>`
  background: ${({ isHovering, theme }) =>
    isHovering ? theme.colors.gradient_card : theme.colors.background_card};
  border-radius: 20px;
  cursor: pointer;
  height: 22.3rem;
  padding: 2rem 1.6rem;
  width: 28.7rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MakeAndModelWrapper = styled.div``;

export const CarMake = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`;

export const CarModel = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const OptionDot = styled.div`
  background-color: ${({ theme }) => theme.colors.option_dot};
  border-radius: 50px;
  height: 0.6rem;
  width: 0.6rem;
`;

export const CarImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Footer = styled.div<HoverProp>`
  display: flex;
  justify-content: ${({ isHovering }) =>
    isHovering ? "space-between" : "flex-end"};
`;

export const BookNow = styled.p<HoverProp>`
  color: ${({ theme }) => theme.colors.background_primary};
  display: ${({ isHovering }) => (isHovering ? "block" : "none")};
  font-size: 1.7rem;
`;

export const CarPriceWrapper = styled.span`
  align-items: baseline;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`;

export const MoneySign = styled.sup`
  font-size: 1.4rem;
`;

export const CarPrice = styled.p`
  font-size: 1.7rem;
`;

export const CarPriceDay = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`;
