import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Textfield = ({ register, lable, placeholder, errors, fieldname }) => {
  return (
    <div className="flex flex-col mb-6">
      {lable && <p className="text-gray-300">* {lable}</p>}
      <input
        type="text"
        className={
          lable
            ? "bg-darkBlack border-black3 mt-2 px-3 py-2 text-gray-400 text-sm"
            : "bg-darkBlack border-black3 px-3 py-2 text-gray-400 text-sm"
        }
        style={{ outline: "none" }}
        placeholder={placeholder}
        {...register}
      />
      {errors[fieldname] && (
        <p className="text-red-500 font-medium text-sm mt-1 flex items-center">
          <BiErrorCircle className="mr-0.5" /> {errors[fieldname].message}
        </p>
      )}
    </div>
  );
};

export default Textfield;
