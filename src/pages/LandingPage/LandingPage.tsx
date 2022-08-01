import React from "react";
import code from "../../assets/code.jpg";
import CustomBadge from "../../shared/components/CustomBadge";
import { CustomPrimaryButton } from "../../shared/components/CustomPrimaryButton";
const LandingPage = () => {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <CustomBadge label="Brand new way" />
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Challenge Your Friends
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Now you can challenge your friends to solve your awesome code.
            </p>
          </div>
          <div>
            <CustomPrimaryButton
              additionalClassName="btn-primary"
              onClick={() => {}}
              label="Signup Now"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src={code}
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
