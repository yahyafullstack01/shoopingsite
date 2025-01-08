"use client";
import React from "react";
import { useLanguage } from "../../Functions/useLanguage";
const Conditions = () => {
    const { translateList, language, setLanguage } = useLanguage(); // Access the language context
    const menuItems = translateList("Conditions", "hero");
  return (
    <div className="p-8 md:p-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        {menuItems[0]}
      </h1>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
        {menuItems[1]}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{menuItems[2]}</li>
          <li>{menuItems[3]}</li>
          <li>
          {menuItems[3]}
          </li>
          <li>
          {menuItems[4]}
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {menuItems[5]}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{menuItems[6]}</li>
          <li>{menuItems[7]}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {menuItems[8]}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{menuItems[9]}</li>
          <li>{menuItems[10]}</li>
        </ul>
        <p className="mt-2">
        {menuItems[11]}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {menuItems[12]}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">{menuItems[13]}</span> {menuItems[14]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[15]}</span> {menuItems[16]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[17]}</span> {menuItems[18]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[19]}</span> {menuItems[20]}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Д{menuItems[21]}
        </h2>
        <p className="mb-2">
        {menuItems[22]}
        </p>
        <p>
        {menuItems[23]}{" "}
          <span className="font-bold text-blue-600">+38-067-579-5497</span>
        </p>
      </section>
    </div>
  );
};

export default Conditions;
