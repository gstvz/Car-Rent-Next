import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5rem 0;
  width: 85%;
`;

export const Car = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  gap: 40px;
`;

export const CarInfoWrapper = styled.div``;

export const MakeAndModel = styled.h2`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`;

export const PriceWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text_default};
  display: flex;
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`;

export const PriceSign = styled.sup``;

export const PhotoWrapper = styled.div``;

export const CarPhotoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const CarPhoto = styled.div`
  margin: 0 auto;
`;

export const BookNowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IdAndColor = styled.aside``;

export const Id = styled.p`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`;

export const Color = styled.p`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`;
