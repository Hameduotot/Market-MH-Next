import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Background,
  ButtonLogin,
  InputLogin,
  LabelForm,
  LoginForm,
  TitleLogin,
} from "../login/styled";

const SingUp = () => {
  const router = useRouter();

  const [submitFormValue, setSubmitFormValue] = useState({});
  const handleOnChaned = (value, name) => {
    setSubmitFormValue({ ...submitFormValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const res = await axios.post(
      "https://reqres.in/api/register",
      submitFormValue
    );

    //   {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    if (res.status === 200 && res.data.token !== null) {
      router.push("/");
    }
  };

  return (
    <Background>
      <LoginForm onSubmit={handleSubmit}>
        <TitleLogin> ثبت نام کنید</TitleLogin>

        <LabelForm> ایمیل</LabelForm>
        <InputLogin
          name="email"
          onChange={(e) => handleOnChaned(e.target.value, e.target.name)}
        />
        <LabelForm> پسورد</LabelForm>
        <InputLogin
          name="password"
          onChange={(e) => handleOnChaned(e.target.value, e.target.name)}
        />
        <ButtonLogin type="submit"> ثبت</ButtonLogin>
      </LoginForm>
    </Background>
  );
};

export default SingUp;
