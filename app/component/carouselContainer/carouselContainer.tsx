'use client'

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

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
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} cover={cover} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props: any) {
  const notSmall = window.innerWidth >= 768;
  return (
    
      <Paper>
        {notSmall ? (
          <div
            className="relative xl:h-[600px] h-96 w-screen"
            style={{
              backgroundImage: `url("${props.cover}") ,url("${props.item.background}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LocationFinder />
          </div>
        ) : (
          <>
            <div
              className="relative xl:h-[600px] h-96 w-screen"
              style={{
                backgroundImage: `url("${props.cover}") ,url("${props.item.background}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <LocationFinder />
          </>
        )}
      </Paper>
    
  );
}

function LocationFinder() {
  return (
    <div className=" text-black w-screen h-[50%] md:w-[400px] md:h-[300px] bg-gray-100 absolute left-0 right-0 bottom-0 m-auto md:left-[10%] md:top-[10%] 2xl:top-[30%] md:right-auto md:bottom-auto shadow-2xl mx-auto ">
      <div className="p-7 flex flex-col gap-y-1.5">
        <h1 className="font-mono">FIND YOUR PLAY</h1>
        <p>Find futsal pitches near you</p>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="   text-black bg-grey-400 border shadow-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center flex-row flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <div className="grow ">Dropdown button </div>
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

        <button
          id="dropdownDefaultButton"
          
          className=" text-white bg-[#2f285a] border shadow-lg hover:bg-gray-400 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center flex-row flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          <div className="grow ">submit </div>
          
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
