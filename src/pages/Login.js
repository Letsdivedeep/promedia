import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  // React form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl">Login</h1>

            {/* google login */}
            <button className="btn btn-outline mt-2">Google</button>
            <button className="btn btn-outline mt-2">GitHub</button>

            <div className="divider">OR</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />

              {/* Email error handling */}
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>

              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-lg "
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be six characters or longer",
                  },
                })}
              />

              {/* Password error handling */}
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>

              {/* reset password */}
              <small className="underline">Forget password</small>

              <button type="submit" className="btn btn-primary btn-block mt-5">
                Login
              </button>
            </form>
            <div className="pt-5 pb-12 text-center">
              <p>
                Don&#x27;t have an account?
                <p className="font-semibold underline ml-1">Create Account</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
