import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          About Us
        </h1>
        <p className="text-[#1C160C] text-base font-normal leading-normal max-w-[720px]">
          Innovative Technologies Academy is Pakistan’s leading tech learning
          platform, offering cutting-edge training programs for individuals
          seeking to master the skills needed to excel in today’s fast-paced
          digital world. Whether you're interested in E-commerce, IT, or
          Freelancing, we provide comprehensive courses designed to empower you
          with the tools to succeed in the global marketplace.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
