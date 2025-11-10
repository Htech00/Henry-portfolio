import React from "react";

const Experience = () => {
  return (
    <section className="flex sm:flex-row flex-col gap-10 rounded-lg bg-gray-200 sm:w-[1100px] w-[350px] mx-auto sm:px-6 shadow-[0_15px_30px] items-center justify-center px-6 ">
      <div className="flex flex-col gap-10 py-6 ">
        <div className=" flex  gap-4 items-end sm:mx-0 mx-auto">
          <h2 className="sm:text-[24px] text-[24px] font-semibold">Experience</h2>
          <div className="flex w-40 bg-gray-200  h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-[Red] h-1.5  dark:bg-[Red]" style="width: 45%"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full sm:w-5 sm:h-5 w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className="flex items-center sm:gap-8 gap-3">
              <p className="font-semibold sm:text-sm text-[10px] text-gray-500 ">
                2014-2015
              </p>

              <div className="flex flex-col">
                <h3 className="font-bold sm:text-[22px] text-[12px]">
                  Web Dev. Instructor
                </h3>
                <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                  St John Bosco Institute of technology
                </p>
              </div>
            </div>
          </div>

          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className="flex items-center sm:gap-8 gap-3">
              <p className="font-semibold sm:text-sm text-[10px] text-gray-500 ">
                2016-2018
              </p>
            </div>
            <div className="flex flex-col pl-4">
              <h3 className="font-bold sm:text-[22px] text-[12px]">
                Software Dev.
              </h3>
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                Ntech Information System
              </p>
            </div>
          </div>

          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className=" flex items-center sm:gap-8 gap-3">
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                2022-2025
              </p>
            </div>
            <div className="flex flex-col pl-4">
              <h3 className="font-bold sm:text-[22px] text-[12px]">
                Web Developer{" "}
              </h3>
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                Tech Studio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--============= EDUCATION DIV =============--> */}

      <div className="flex flex-col gap-10  py-6 ">
        <div className="  flex gap-4 items-end">
          <h2 className="text-[24px] font-semibold">Education</h2>
          <div className="flex w-40 bg-gray-200  h-1.5 mb-4 dark:bg-gray-700 ">
            <div className="bg-[Red] h-1.5  dark:bg-[Red]" style="width: 45%"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className=" flex items-center sm:gap-8 gap-3">
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                2008-2011
              </p>
              <div className="flex flex-col">
                <h3 className="font-bold sm:text-[22px] text-[12px]">SSCE</h3>
                <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                  faban fortress college
                </p>
              </div>
            </div>
          </div>

          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className=" flex items-center sm:gap-8 gap-3">
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                2012-2014
              </p>
              <div className="flex flex-col">
                <h3 className="font-bold sm:text-[22px] text-[12px]">Diploma</h3>
                <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                  st john bosco institute of technology
                </p>
              </div>
            </div>
          </div>
          <div className="ex-div flex  gap-4 px-4 py-4 mx-auto sm:w-[450px] w-[320px] h-[100px] items-center rounded-lg bg-white">
            <div className="flex rounded-full w-5 h-5 border border-gray-500 items-center justify-center">
              <div className="rounded-full w-1.5 h-1.5  bg-gray-500"></div>
            </div>
            <div className=" flex items-center sm:gap-8 gap-3">
              <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                2018-2022
              </p>
              <div className="flex flex-col">
                <h3 className="font-bold sm:text-[22px] text-[12px]">B.S.C</h3>
                <p className="font-medium text-gray-500 sm:text-sm text-[10px]">
                  tai solarin university of education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
