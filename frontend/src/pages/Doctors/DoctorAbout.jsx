import React from "react";
import { formatDate } from "../../utils/formatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr.Kunal Kwashwa
          </span>
        </h3>
        <p className="text_para">
          Dr. Kwashwa is a pillar of the local medical community. His kindness,
          empathy, and innovative approach to medicine have earned him the trust
          and admiration of both his patients and colleagues. Beyond his medical
          skills, Dr. Kunal Kwashwa is recognized for his philanthropic efforts,
          actively contributing to various community health initiatives.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formatDate("06-21-2001")} - {formatDate("7-29-2004")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("10-4-2010")} - {formatDate("5-13-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
          </li>
        </ul>
      </div>

      <div className="mt-12"></div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("06-21-2001")} - {formatDate("7-29-2004")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                 Jr.Surgeon
              </p>
              <p className="text-[16px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("11-21-2005")} - {formatDate("6-21-2008")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                 Sr.Surgeon
              </p>
              <p className="text-[16px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </li>
        </ul>
    </div>
  );
};

export default DoctorAbout;
