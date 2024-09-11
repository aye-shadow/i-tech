import React from "react";

const Cards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
      <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
        <div
          className="text-[#1C160C]"
          data-icon="GraduationCap"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1C160C] text-base font-bold leading-tight">
            State-of-the-Art Curriculum
          </h2>
          <p className="text-[#A18249] text-sm font-normal leading-normal">
            Our courses are designed to keep pace with the latest technologies.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
        <div
          className="text-[#1C160C]"
          data-icon="ChalkboardTeacher"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1C160C] text-base font-bold leading-tight">
            Experienced Instructors
          </h2>
          <p className="text-[#A18249] text-sm font-normal leading-normal">
            Our faculty comprises industry experts with real-world experience.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
        <div
          className="text-[#1C160C]"
          data-icon="Watch"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1C160C] text-base font-bold leading-tight">
            Flexible Learning Options
          </h2>
          <p className="text-[#A18249] text-sm font-normal leading-normal">
            Study at your own pace with our online and in-person classNamees.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
        <div
          className="text-[#1C160C]"
          data-icon="HandGrabbing"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M188,80a27.79,27.79,0,0,0-13.36,3.4,28,28,0,0,0-46.64-11A28,28,0,0,0,80,92v20H68a28,28,0,0,0-28,28v12a88,88,0,0,0,176,0V108A28,28,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V140a12,12,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v28a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v28a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1C160C] text-base font-bold leading-tight">
            Hands-on Learning
          </h2>
          <p className="text-[#A18249] text-sm font-normal leading-normal">
            Our courses include practical assignments and projects for
            real-world experience.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
        <div
          className="text-[#1C160C]"
          data-icon="Certificate"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1C160C] text-base font-bold leading-tight">
            Certification
          </h2>
          <p className="text-[#A18249] text-sm font-normal leading-normal">
            Earn a certificate upon course completion, recognized by the
            industry and employers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
