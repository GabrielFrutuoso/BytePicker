import React from "react";

export const ValueRenderer = ({ raw }) => {

    const checkColor = () => {
        if (typeof raw === "number") {
            return "text-[#8BE9FD]";
        } else if (typeof raw === "string" && raw != "true" && raw != "false") {
            return "text-[#F1FA8C]";
        } else if (raw == "true" || raw == "false") {
            return "text-[#BD93F9]";
        } else if (typeof raw === "object") {
            return "text-purple-500";
        } else if (typeof raw === "undefined") {
            return "text-gray-400";
        } else {
            return "";
        }
    }


  return (

    <span
      className={checkColor()}
    >
      {raw}
    </span>
  );
};
