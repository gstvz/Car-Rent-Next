import styled from "styled-components";

type isActiveProp = {
  isActive: boolean;
};

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 2rem;
  width: 85%;
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
