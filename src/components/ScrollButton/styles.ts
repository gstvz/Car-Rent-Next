import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button_light};
  border: none;
  border-radius: 50px;
  bottom: 40px;
  right: 40px;
  position: fixed;
`;
