import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  padding: 5rem 0.6rem;
  width: 100%;
`;

export const Message = styled.p`
  color: #fc0303;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`;
