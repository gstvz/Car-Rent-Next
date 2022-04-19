import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-size: 3.5rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  margin-bottom: 3rem;

  @media (max-width: 1068px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
  display: flex;
  flex-direction: column;
  max-width: 35.2rem;
  width: 100%;

  @media (max-width: 1068px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  border-bottom: 2px solid #ebebeb;
  padding: 2.5rem;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.colors.text_default};
  cursor: pointer;
  font-size: 1.7rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
  width: 100%;

  @media (max-width: 1068px) {
    font-size: 1.5rem;
  }
`;

export const InvalidInput = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: normal;
`;

export const PasswordLink = styled.p`
  color: ${({ theme }) => theme.colors.option_dot};
  font-size: 1.7rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
  padding: 2rem 2rem 0 0;
  text-align: right;

  @media (max-width: 1068px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.button_primary};
  display: flex;
  font-size: 3.5rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  gap: 10px;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 1068px) {
    font-size: 2.5rem;
  }
`;

export const ActionLink = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.text_light};
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  gap: 10px;
  padding: 3rem;
  text-decoration: none;
  text-align: right;

  @media (max-width: 1068px) {
    font-size: 2.5rem;
  }
`;
