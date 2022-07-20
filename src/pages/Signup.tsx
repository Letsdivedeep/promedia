import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object()
  .shape({
    userName: yup.string().required("User Name is Required"),
    email: yup
      .string()
      .required("Email is Required")
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Provide a valid Email"),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is Required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="mt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl">Sign Up</h1>
            <button className="btn btn-success mt-2">Signup with Google</button>
            <button className="btn btn-success mt-2">Signup with GitHub</button>

            <div className="divider">OR</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* userName */}
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="User Name"
                {...register("userName")}
              />

              {/* userName error handling */}
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.userName?.message}
                </span>
              </label>

              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Email"
                {...register("email")}
              />

              {/* Email error handling */}
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.email?.message}
                </span>
              </label>

              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                className="input input-bordered w-full max-w-lg "
                placeholder="Password"
                {...register("password")}
              />

              {/* Password error handling */}
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.password?.message}
                </span>
              </label>

              {/* Confirm Password */}
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                type="password"
                className="input input-bordered w-full max-w-lg "
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />

              {/* Confirm Password error handling */}
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.confirmPassword?.message}
                </span>
              </label>

              <button type="submit" className="btn btn-primary btn-block mt-5">
                Sign up
              </button>
            </form>

            <div className="pt-5 pb-12 text-center">
              <p>
                Already have an account?
                <p className="font-semibold underline ml-1">Login.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
