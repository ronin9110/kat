"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const initial = {
    num1: 0,
    num2: 0,
    succes: false,
    res: "",
    times: 0,
  };
  const [formData, setFormData] = useState(initial);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleButtonClick = (value: any) => {
    setFormData({
      ...formData,
      succes: true,
      times: 1,
      res: `${formData.num1}${formData.num2}`,
    });
  };

  const handleClear = () => {};

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>this is the gift i'm capable of doing....</h2>
        {formData.times > 0 ? (
          <div>
            <Link href={"/video"}>okay you can procced Now</Link>
          </div>
        ) : null}
      </div>
      <p>This calculator!</p>
      <hr />
      <div>
        <div>
          <input
            type="number"
            name="num1"
            onChange={(event) => handleInputChange(event)}
          />
          +
          <input
            type="number"
            name="num2"
            onChange={(event) => handleInputChange(event)}
          />
        </div>

        {formData.succes ? (
          <div>
            <hr />={formData.res}
          </div>
        ) : (
          <div></div>
        )}
        <button onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  );
}
