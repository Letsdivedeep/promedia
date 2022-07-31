import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomPrimaryButton } from "../../shared/components/CustomPrimaryButton";
import CustomInput from "../../shared/components/CustomInput";
import SignUpFooter from "./components/SignUpFooter";

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
            <CustomPrimaryButton additionalClassName="btn-success" onClick={() => { }} label="Signup with Google" ></CustomPrimaryButton>
            <CustomPrimaryButton additionalClassName="btn-success" onClick={() => { }} label="Signup with GitHub" ></CustomPrimaryButton>

            <div className="divider">OR</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* userName */}
              <CustomInput className="input input-bordered w-full max-w-lg" placeholder="User Name" label="User Name" type="text" handlerFunction={register} handlerFuncArgs="userName" errors={errors}></CustomInput>

              {/* Email */}

              <CustomInput className="input input-bordered w-full max-w-lg" placeholder="Email" label="Email" type="text" handlerFunction={register} handlerFuncArgs="email" errors={errors}></CustomInput>

              {/* Password */}
              <CustomInput className="input input-bordered w-full max-w-lg" placeholder="Password" label="Password" type="password" handlerFunction={register} handlerFuncArgs="password" errors={errors}></CustomInput>

              {/* Confirm Password */}

              <CustomInput className="input input-bordered w-full max-w-lg" placeholder="Confirm Password" label="Confirm Password" type="password" handlerFunction={register} handlerFuncArgs="confirmPassword" errors={errors}></CustomInput>

              <CustomPrimaryButton additionalClassName="btn-primary" onClick={onSubmit} label="Sign Up" ></CustomPrimaryButton>
            </form>

            <SignUpFooter></SignUpFooter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
