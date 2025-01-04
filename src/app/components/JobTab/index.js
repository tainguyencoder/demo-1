'use client';
import { useState } from 'react';
// components
import Code from '../Code';
// data
import { careerData } from '../../Data/data'

export default function JobTab() {
  let [isOpenTab, setIsOpenTab] = useState(0);

  let handleTabClick = (index) => {
    setIsOpenTab(index);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-8 gap-[30px]">
      <div className="w-full lg:w-1/4">
        <ul className="flex flex-col text-center" id="myTab" role="tablist">
          {careerData.map((job) => (
            <li key={job.id} role="presentation">
              <button
                onClick={() => handleTabClick(job.id)}
                className={`${
                  isOpenTab === job.id
                    ? 'text-white bg-slate-900'
                    : ''
                } shadow px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-slate-400 transition-all duration-500 ease-in-out`}
              >
                {job.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-3/4">
        <div id="myTabContent" className="bg-white rounded-md">
          {careerData.map(
            (job) =>
              isOpenTab === job.id && (
                <div key={job.id} className="relative overflow-hidden">
                  <Code code={job.code} />
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
