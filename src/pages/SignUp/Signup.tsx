import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomPrimaryButton } from "../../shared/components/CustomPrimaryButton";
import CustomInput from "../../shared/components/CustomInput";
import SignUpFooter from "./components/SignUpFooter";
import Divider from "../../shared/components/Divider";
import SignupFom from "./components/SignUpForm.js";

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

            <Divider></Divider>

            <SignupFom onSubmit={handleSubmit(onSubmit)} errors={errors} register={register}></SignupFom>

            <SignUpFooter></SignUpFooter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
