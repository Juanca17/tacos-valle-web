"use client";

export const Button = ({ label, isOrange = false }) => {
  return (
    <button
      className={`${
        isOrange
          ? "bg-[#E9471F] border-[#E9471F] text-white"
          : "bg-[#F5ECEA] border-[#F5ECEA] text-black"
      } font-gt-alpina-bold text-lg px-6 py-2 rounded-full transition-all custom_button`}
    >
      {label}
    </button>
  );
};
