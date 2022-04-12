import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 2.2rem 0;
  width: 85%;
`;

export const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1068px) {
    align-items: center;
    flex-direction: column;
  }
`;
