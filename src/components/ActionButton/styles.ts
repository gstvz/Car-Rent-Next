import styled from "styled-components";

type Props = {
  back?: boolean;
  forward?: boolean;
};

export const Button = styled.button<Props>`
  align-items: center;
  ${({ theme, forward }) =>
    forward
      ? `background-color: ${theme.colors.text_default}; border: none; color: ${theme.colors.background_primary}`
      : null};
  ${({ theme, back }) =>
    back
      ? `background: none; border: 1px solid ${theme.colors.text_default}; color: ${theme.colors.text_default}`
      : null};
  border-radius: 25px;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
  gap: 20px;
  height: 5rem;
  padding: 2rem;
  width: fit-content;
`;
