import React from "react";
import Link from "next/link";

type Props = {
  isOpen: any;
  onClick : ()=>void;
  data: any;
  keyValue: String;
};

export default function Accordion({ isOpen, onClick, data, keyValue }: Props) {
  
  


  return (
    <div onClick={onClick} className="">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-black rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>{keyValue.charAt(0).toUpperCase() + keyValue.slice(1)}</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && (
        <div>
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {data[`${keyValue}`]}
            </p>
           
          </div>
        </div>
      )}
    </div>
  );
}
