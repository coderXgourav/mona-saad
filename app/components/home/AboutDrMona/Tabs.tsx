"use client";
import { Dictionary } from "@/dictionaries";
import { FC, useState } from "react";

interface Props {
  dict: Dictionary;
}

const Tabs: FC<Props> = ({ dict }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex items-center gap-6 mb-6">
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1
              ? "text-[#961F5F] border-[#961F5F]"
              : "text-[#F6A2A3] border-[#F6A2A3]"
          } border-b pb-2 text-base lg:text-2xl font-medium`}
        >
          {dict.home.about.our_approach.title}
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${
            activeTab === 2
              ? "text-[#961F5F] border-[#961F5F]"
              : "text-[#F6A2A3] border-[#F6A2A3]"
          } border-b pb-2 text-base lg:text-2xl font-medium`}
        >
          {dict.home.about.our_values.title}
        </button>
      </div>

      {/* List Items */}
      <div className="flex flex-wrap gap-2 lg:gap-6 text-primary">
        <div className="flex flex-col gap-2 lg:gap-3">
          <ul className="flex flex-col gap-3">
            <li className="text-xs flex items-center gap-2 lg:gap-3">
              <div className="min-h-6 min-w-6 size-6 text-center text-base rounded-full border border-[#961F5F] text-[#961F5F]">
                1
              </div>
              {activeTab === 1
                ? dict.home.about.our_approach.list.one
                : dict.home.about.our_values.list.one}
            </li>
            <li className="text-xs flex items-center gap-2 lg:gap-3">
              <div className="min-h-6 min-w-6 size-6 text-center text-base rounded-full border border-[#961F5F] text-[#961F5F]">
                2
              </div>
              {activeTab === 1
                ? dict.home.about.our_approach.list.two
                : dict.home.about.our_values.list.two}
            </li>
            <li className="text-xs flex items-center gap-2 lg:gap-3">
              <div className="min-h-6 min-w-6 size-6 text-center text-base rounded-full border border-[#961F5F] text-[#961F5F]">
                3
              </div>
              {activeTab === 1
                ? dict.home.about.our_approach.list.three
                : dict.home.about.our_values.list.three}
            </li>
          </ul>
        </div>
        {activeTab === 2 && (
          <div className="flex flex-col gap-2 lg:gap-3">
            <ul className="flex flex-col gap-3">
              <li className="text-xs flex items-center gap-2 lg:gap-3">
                <div className="min-h-6 min-w-6 size-6 text-center text-base rounded-full border border-[#961F5F] text-[#961F5F]">
                  4
                </div>
                {dict.home.about.our_values.list.four}
              </li>
              <li className="text-xs flex items-center gap-2 lg:gap-3">
                <div className="min-h-6 min-w-6 size-6 text-center text-base rounded-full border border-[#961F5F] text-[#961F5F]">
                  5
                </div>
                {dict.home.about.our_values.list.five}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
