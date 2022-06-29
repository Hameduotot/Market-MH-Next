import styled from "styled-components";

const Background = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  height: 100%;
`;
const LoginForm = styled.form`
  background-color: white;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 400px;
  width: 300px;
  padding: 2rem;
  border-radius: 0.375rem;
`;
const TitleLogin = styled.h1`
  color: green;
  font-size: 24px;
  text-align: start;
  width: 100%;
`;

const ButtonLogin = styled.button`
  background-color: green;
  color: white;
  width: 100%;
  padding: 1rem 0.75rem;
  cursor: pointer;
`;
const LabelForm = styled.label`
  font-size: 18px;
  width: 100%;
  text-align: start;
`;
const InputLogin = styled.input`
  color: black;
  padding: 15px 20px;
  width: 100%;
  direction: rtl;
  &:focus {
    border: none;
  }
`;
export {
  Background,
  TitleLogin,
  LoginForm,
  ButtonLogin,
  InputLogin,
  LabelForm,
};
