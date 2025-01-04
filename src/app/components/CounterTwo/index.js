"use client";
import React from "react";
import CountUp from "react-countup";

export default function CounterTwo() {
  return (
    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
      <div className="counter-box text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-2 text-slate-400 dark:text-white">
          <CountUp className="counter-value" start={1010} end={1548} />+
        </h2>
        <p className="counter-head text-lg font-medium">Properties Sell</p>
      </div>

      <div className="counter-box text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-2 text-slate-400 dark:text-white">
          <CountUp className="counter-value" start={2} end={25} />+
        </h2>
        <p className="counter-head text-lg font-medium">Award Gained</p>
      </div>

      <div className="counter-box text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-2 text-slate-400 dark:text-white">
          <CountUp className="counter-value" start={0} end={9} />+
        </h2>
        <p className="counter-head text-lg font-medium">Years Experience</p>
      </div>
    </div>
  );
}
