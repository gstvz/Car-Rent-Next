import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5rem 0;
  width: 85%;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Car = styled.div`
  flex: 1;

  @media (max-width: 1068px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  } ;
`;

export const Header = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 1068px) {
    flex-direction: column;
  } ;
`;

export const CarMakeWrapper = styled.div`
  @media (max-width: 1068px) {
    margin: 0 auto;
  }
`;

export const CarInfoWrapper = styled.div``;

export const MakeAndModel = styled.h2`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};

  @media (max-width: 1068px) {
    font-size: 2.6rem;
  } ;
`;

export const PriceWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text_default};
  display: flex;
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};

  @media (max-width: 1068px) {
    font-size: 2rem;
    justify-content: center;
  } ;
`;

export const PriceSign = styled.sup``;

export const PhotoWrapper = styled.div``;

export const CarPhotoWrapper = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 1068px) {
    flex-direction: column;
    margin-top: 2rem;
  } ;
`;

export const CarPhoto = styled.div`
  margin: 0 auto;

  @media (max-width: 1068px) {
    margin-top: 2rem;
  }
`;

export const BookNowWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1068px) {
    margin-top: 2rem;
  }
`;

export const IdAndColor = styled.aside`
  width: 6rem;

  @media (max-width: 1068px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const Id = styled.p`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};

  @media (max-width: 1068px) {
    font-size: 2.6rem;
    margin-top: 20rem;
  } ;
`;

export const Color = styled.p`
  color: ${({ theme }) => theme.colors.text_default};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};

  @media (max-width: 1068px) {
    font-size: 2.6rem;
  } ;
`;
