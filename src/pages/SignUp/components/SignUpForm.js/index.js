import React from "react";
import CustomInput from "../../../../shared/components/CustomInput";
import { CustomPrimaryButton } from "../../../../shared/components/CustomPrimaryButton";
export default function SignupFom({onSubmit,register,errors}) {
  return (
    <form onSubmit={onSubmit}>
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
  )
}
