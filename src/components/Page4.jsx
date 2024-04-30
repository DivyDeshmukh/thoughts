import React, { useState } from "react";
import healthCare from "../data/healthCare";
import technology from "../data/technology";
import fashion from "../data/fashion";
import growth from "../data/growth";
import business from "../data/business";
import sports from "../data/sports";
import Button from "./Button";
import Card from "./Card";

function Page4() {
  const [isActive, setIsActive] = useState("health-care");
  return (
    <div className="h-auto w-screen bg-[#f8f9fb] flex flex-col gap-4 pt-16 items-center justify-center pb-8">
      <div
        id="text"
        className="items-center justify-center flex flex-col gap-1"
      >
        <h1 className="text-black font-extrabold text-3xl uppercase text-center">
          Explore Your Favorite Topics
        </h1>
        <p className="font-light text-[10px] w-[60%] text-center">
          Explore our curated collection of thoughts and perspectives designed
          to empower and educate on matters of health and well-being. We hope
          you will love exploring thoughts of different people around the world.
        </p>
      </div>

      <div
        id="buttons"
        className="p-1 bg-[#ededed] flex justify-center items-center gap-2 rounded-full flex-wrap mx-[10px] px-[5px] py-[10px] mt-2"
      >
        <button
          className={`${
            isActive === "health-care" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("health-care");
          }}
        >
          Health Care
        </button>
        <button
          className={`${
            isActive === "technology" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("technology");
          }}
        >
          Technology
        </button>
        <button
          className={`${
            isActive === "fashion" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("fashion");
          }}
        >
          Fashion
        </button>
        <button
          className={`${
            isActive === "growth" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("growth");
          }}
        >
          Self Growth
        </button>
        <button
          className={`${
            isActive === "business" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("business");
          }}
        >
          Business
        </button>
        <button
          className={`${
            isActive === "sports" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("sports");
          }}
        >
          Sports
        </button>
      </div>

      <div
        id="content"
        className="flex flex-wrap gap-8 w-full justify-center items-center mt-6"
      >
        {isActive === "health-care" &&
          healthCare.map((healthCare, index) => (
            <Card data={healthCare} key={index} />
          ))}

        {isActive === "technology" &&
          technology.map((technology, index) => (
            <Card data={technology} key={index} />
          ))}

        {isActive === "fashion" &&
          fashion.map((fashion, index) => <Card data={fashion} key={index} />)}

        {isActive === "growth" &&
          growth.map((growth, index) => <Card data={growth} key={index} />)}

        {isActive === "business" &&
          business.map((business, index) => (
            <Card data={business} key={index} />
          ))}

        {isActive === "sports" &&
          sports.map((sports, index) => <Card data={sports} key={index} />)}
      </div>

      <Button text={"Explore more"} linkClassName={"hover:bg-[#f8f9fb]"} />
    </div>
  );
}

export default Page4;
