import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 1068px) {
    height: 100%;
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LogoExotic = styled.h1`
  font-size: 6.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};

  @media (max-width: 1068px) {
    font-size: 4rem;
  }
`;

export const LogoCars = styled.h1`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_400};

  @media (max-width: 1068px) {
    font-size: 3rem;
  }
`;
