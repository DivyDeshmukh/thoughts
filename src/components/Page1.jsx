import React from "react";
import Header from "./Header";
import Container from "./Container";
import { Link } from "react-router-dom";
import Button from "./Button";

function Page1() {
  return (
    <Container className="w-full bg-[#ffe0c3] flex flex-col gap-6 mb-6">
      <Header />

      <div
        id="title"
        className="flex flex-col gap-6 mt-[-10px] text-center justify-center items-center"
      >
        <div id="title-text" className="relative">
          <h1
            id="top-text"
            className="italic font-sans text-[#7e6146] text-[21.5px] font-semibold relative z-[10]"
          >
            Share Your Independent Thoughts!!
          </h1>
          <h1 className="text-black font-extrabold text-7xl uppercase mt-[-18.5px] relative ">
            Where Every
          </h1>
          <h1 className="text-black font-extrabold text-7xl uppercase">
            Thought IS
          </h1>
          <h1 className="text-black font-extrabold text-7xl uppercase">
            Heard
          </h1>
        </div>

        <div
          id="followers-info"
          className="flex justify-center items-center gap-4 bg-[#faecde] rounded-3xl w-fit px-4 py-1"
        >
          <div id="img" className="flex gap-[0.8px]">
            <div
              id="img1"
              className="h-[30px] w-[30px] overflow-hidden rounded-full"
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile1"
                className="object-cover"
              />
            </div>

            <div
              id="img2"
              className="h-[30px] w-[30px] overflow-hidden rounded-full"
            >
              <img
                src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile2"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              id="img3"
              className="h-[30px] w-[30px] overflow-hidden rounded-full"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile3"
                className="object-cover"
              />
            </div>

            <div
              id="img4"
              className="h-[30px] w-[30px] overflow-hidden rounded-full"
            >
              <img
                src="https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile4"
                className="object-cover"
              />
            </div>
          </div>
          <div id="img-text">
            <h5 className="text-[9px]">+100k WorldWide users</h5>
          </div>
        </div>

        <div id="desc">
          <p className="text-[10px] font-light">
            Introducing Thoughts - Where every voice and every thought can be
            shared effortlessly via tweets or in the form of engaging blogs.
          </p>
        </div>

        <Button text={"Get Started"} linkClassName={"hover:bg-[#ffe0c3]"} />
      </div>

      <div
        id="bottom-part"
        className="flex flex-col justify-center items-center"
      >
        <div
          id="video"
          className="h-auto overflow-hidden min-w-[330px] w-[40vw] rounded-xl"
        >
          <video
            src="https://videos.pexels.com/video-files/3253741/3253741-uhd_3840_2160_25fps.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div
          id="info"
          className="flex justify-center items-center gap-3 mt-4 mb-6"
        >
          <button className="bg-[#FAECDE] px-4 py-1 rounded-xl">
            <div id="stats" className="flex justify-center items-center gap-2">
              <i class="ri-checkbox-circle-line bg-transparent text-red-600 font-bold"></i>
              <p className="text-[10px] sm:text-[13px] md:text-[17px] lg:text-[20px]">
                30K
              </p>
              <p className="text-[8.5px] sm:text-[10.5px] md:text-[12.5px] lg:text-[15px] font-light font-sans">
                Daily Thoughts
              </p>
            </div>
          </button>
          <button className="bg-[#FAECDE] px-4 py-1 rounded-xl">
            <div id="stats" className="flex justify-center items-center gap-2">
              <i class="ri-checkbox-circle-line bg-transparent text-red-600 font-bold"></i>
              <p className="text-[10px] sm:text-[13px] md:text-[17px] lg:text-[20px]">
                25K
              </p>
              <p className="text-[8.5px] sm:text-[10.5px] md:text-[12.5px] lg:text-[15px] font-light font-sans">
                Daily Blogs
              </p>
            </div>
          </button>
          <button className="bg-[#FAECDE] px-4 py-1 rounded-xl">
            <div id="stats" className="flex justify-center items-center gap-2">
              <i class="ri-checkbox-circle-line bg-transparent text-red-600 font-bold"></i>
              <p className="text-[10px] sm:text-[13px] md:text-[17px] lg:text-[20px]">
                22K
              </p>
              <p className="text-[8.5px] sm:text-[10.5px] md:text-[12.5px] lg:text-[15px] font-light font-sans">
                Daily Podcast
              </p>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Page1;
