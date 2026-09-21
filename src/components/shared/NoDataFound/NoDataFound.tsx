"use client";

import React from "react";

interface NoDataFoundProps {
  dataTitle?: string;
  noDataText?: string;
  className?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  dataTitle = "Data",
  noDataText = "No Data Found",
  className = "",
}) => {
  const defaultText = `No ${dataTitle} found.`;
  const message = noDataText || defaultText;

  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center border border-[#F0E4E2] dark:border-white/10 rounded-3xl bg-[#FFF9F8]/80 dark:bg-white/5 shadow-[0_8px_30px_rgba(140,85,80,0.04)] relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 ${className}`}
    >
      {/* Modern Custom Premium SVG Illustration */}
      <div className="relative mb-6 flex justify-center items-center">
        <svg
          className="w-24 h-24 text-[#C9A09A] drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.1" />
          
          {/* Paper/Document sheet */}
          <rect
            x="32"
            y="20"
            width="36"
            height="46"
            rx="5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="white"
          />
          
          {/* Lines on paper */}
          <line x1="42" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <line x1="42" y1="40" x2="58" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <line x1="42" y1="48" x2="50" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          
          {/* Magnifying glass */}
          <g>
            <circle cx="66" cy="62" r="11" fill="white" stroke="#62443D" strokeWidth="2.5" />
            <line x1="74" y1="70" x2="84" y2="80" stroke="#62443D" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="62" y1="58" x2="70" y2="66" stroke="#C9A09A" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="70" y1="58" x2="62" y2="66" stroke="#C9A09A" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-[#62443D] dark:text-[#FAF5F4] tracking-tight mb-2">
        {dataTitle === "Data"
          ? "No Results Found"
          : `${dataTitle.charAt(0).toUpperCase() + dataTitle.slice(1)} Empty`}
      </h3>

      <p className="text-sm text-[#80635D] dark:text-[#A79896] max-w-sm leading-relaxed mb-5">
        {message}
      </p>

      <div className="h-0.5 w-12 bg-[#EAD9D5] dark:bg-white/10 rounded-full" />
    </div>
  );
};

export default NoDataFound;