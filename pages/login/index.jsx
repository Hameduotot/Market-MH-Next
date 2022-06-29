import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import {
  Background,
  ButtonLogin,
  InputLogin,
  LabelForm,
  LoginForm,
  TitleLogin,
} from "./styled";

const Login = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({});
  const handelOnChange = (value, name) => {
    setFormValue({ ...formValue, [name]: value });
  };
  const handelOnSubmit = async (e) => {
    if (e) e.preventDefault();
    const res = await axios.post("https://reqres.in/api/login", formValue);
    console.log(res);
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
      <LoginForm onSubmit={handelOnSubmit}>
        <TitleLogin>ورود</TitleLogin>
        <LabelForm htmlFor="email">ایمیل </LabelForm>
        <InputLogin
          name="email"
          type={"text"}
          onChange={(event) =>
            handelOnChange(event.target.value, event.target.name)
          }
        />
        <LabelForm htmlFor="password">رمز عبور</LabelForm>
        <InputLogin
          name="password"
          type={"password"}
          onChange={(event) =>
            handelOnChange(event.target.value, event.target.name)
          }
        />
        <ButtonLogin>ارسال</ButtonLogin>
      </LoginForm>
    </Background>
  );
};

export default Login;
