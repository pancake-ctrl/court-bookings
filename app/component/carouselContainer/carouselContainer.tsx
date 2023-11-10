"use client";
import React, { useState, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const notSmall = window.innerWidth >= 640;

export default function CarouselContainer() {
  const cover = "./cover.png";
  var items = [
    {
      background: "/futsal.jpg",
    },
    {
      background: "/football-carousel.jpg",
    },
    {
      background: "/basketball-carousel.jpg",
    },
    {
      background: "/tennis-carousel.jpg",
    },
  ];

  return (
    <div className="w-screen ">
      <>
        {notSmall ? "" : <LocationFinder />}
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} cover={cover} />
          ))}
        </Carousel>
      </>
    </div>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <div
        className="relative xl:h-[600px] h-96 w-screen"
        style={{
          backgroundImage: `url("${props.cover}") ,url("${props.item.background}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {notSmall ? <LocationFinder /> : ""}
      </div>
    </Paper>
  );
}

function LocationFinder() {
  const sports = [
    { id: 1, sport: "Football" },
    { id: 2, sport: "Basketball" },
    { id: 3, sport: "Hockey" },
    { id: 4, sport: "Tennis" },
  ];

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  function onClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="z-10 text-black w-screen h-[50%] sm:w-[400px] sm:h-[300px] bg-gray-100 sm:absolute static left-0 right-0 bottom-0 m-auto sm:left-[10%] sm:top-[10%] 2xl:top-[30%] sm:right-auto sm:bottom-auto shadow-2xl mx-auto ">
      <div className="p-7 flex flex-col gap-y-1.5">
        <h1 className="font-mono">FIND YOUR PLAY</h1>
        <p>Find futsal pitches near you</p>

        <div className="relative flex flex-col">
          {/* DROPDOWN BUTTON */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="grow text-black bg-grey-400 border shadow-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center flex-row flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={onClick}
          >
            <div className="grow ">SELECT A SPORT </div>
            <svg
              className="w-2.5 h-2.5 ml-2.5 justify-end"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* DROPDOWN LIST*/}
          <div
            ref={dropDownRef}
            className={`${
              isActive ? " opacity-100 visible translate-y-0" : "hidden"
            } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {sports.map((sport) => (
                <li key={sport.id}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {sport.sport}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          id=""
          className=" text-white bg-[#2f285a] border shadow-lg hover:bg-gray-400 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center flex-row flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          <div className="grow ">submit </div>
        </button>
      </div>
    </div>
  );
}
