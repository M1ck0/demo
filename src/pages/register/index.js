import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilState } from "recoil";

import Button from "common/components/button";
import Input from "common/components/input";

import { usersState } from "recoil/atom/users";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email must be valid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Register = () => {
  const [users, setUsers] = useRecoilState(usersState);
  const [created, setCreated] = useState(null);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // check if user already exists
    const user = users.find((user) => user.email === data.email);

    if (user) {
      setCreated(false);
    } else {
      setUsers((prevState) => [...prevState, data]);
      setCreated(true);
    }

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mx-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    label="Username"
                    placeholder="Username"
                    type="text"
                    error={errors.username}
                    {...field}
                  />
                )}
              />
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
              <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    label="Confirm password"
                    placeholder="Password"
                    type="password"
                    error={errors.confirmPassword}
                    {...field}
                  />
                )}
              />
              <Button type="submit" className="w-full text-sm">
                Register
              </Button>
              <Link to="/login" className="text-center block -translate-y-3">
                Or login
              </Link>
              {created === true ? (
                <p className="text-green-500">
                  User created. Redirecting you to login...
                </p>
              ) : null}
              {created === false ? (
                <p className="text-red-500">User with that email already exists.</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
