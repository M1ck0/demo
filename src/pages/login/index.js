import { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Button from "common/components/button";
import Input from "common/components/input";

import { usersState } from "recoil/atom/users";
import { userState } from "recoil/atom/user";

const schema = yup
  .object({
    email: yup.string().email("Email must be valid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum."),
  })
  .required();

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  const users = useRecoilValue(usersState);
  const setLoginUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      setLoginUser(user);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (loggedIn === true) {
        navigate("/");
      }

      setLoggedIn(null);
    }, 1000);
  }, [loggedIn]);

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mx-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    label="Email"
                    placeholder="user@email.com"
                    type="text"
                    error={errors.email}
                    {...field}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    label="Password"
                    placeholder="Password"
                    type="password"
                    error={errors.password}
                    {...field}
                  />
                )}
              />
              <Button type="submit" className="w-full text-sm">
                Log in
              </Button>
              <Link to="/register" className="text-center block -translate-y-3">
                Or register
              </Link>
              {loggedIn === true ? (
                <p className="text-green-500">Success. Redirecting...</p>
              ) : null}
              {loggedIn === false ? (
                <p className="text-red-500">Invalid email or password</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
