"use client";
import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";

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
    <div className="w-full ">
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
        className="relative xl:h-[600px] h-96 w-full"
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
  const sportsList = ["Football", "Basketball", "Hockey", "Tennis"];

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [sport, setSport] = useState("SELECT A SPORT");

  function handleClick() {
    setIsActive(!isActive);
  }
  function handleSelectionClick(sport: any) {
    sportSelection(sport);
  }

  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);

  const sportSelection = (sport: string): void => {
    setSport(sport);
  };

  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);

  return (
    <div className="z-10 text-black w-screen h-[50%] sm:w-[400px] sm:h-[300px] bg-gray-100 sm:absolute static left-0 right-0 bottom-0 m-auto sm:left-[10%] sm:top-[10%] 2xl:top-[30%] sm:right-auto sm:bottom-auto shadow-2xl mx-auto ">
      <div className="p-7 flex flex-col gap-y-1.5">
        <h1 className="font-mono">FIND YOUR PLAY</h1>
        <p>Find futsal pitches near you</p>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Options
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95" */}
          {isActive?
          <div
            className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" - */}
              {sportsList.map((sport,index)=>{
                return(

              <a
              key={index}
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
              >
                {sport}
              </a>
                )
              })}
              
            </div>
          </div>
          :
          ''}
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
