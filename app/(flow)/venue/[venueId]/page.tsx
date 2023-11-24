"use client";

import React, { useState } from "react";
import BookingForm from "@/app/component/bookingForm/bookingForm";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Accordion from "@/app/component/accordion/accordion";

export default function Page({
  searchParams,
}: {
  searchParams: {
    id: number;
    name: string;
    image: string[];
    category: string[];
    address: string;
  };
}) {
  const images = searchParams.image;
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="container flex flex-col gap-8 sm:text-xl max-h-full max-w-full mx-auto m-5 justify-center ">
      <div className="container w-full mx-auto h-fit my-8">
        <div className="flex flex-wrap justify-start grow gap-4">
          {images?.map((image) => {
            return (
              <div key={image} className=" relative w-64 h-44 overflow-hidden">
                <Image
                  className="h-auto rounded-lg  object-cover"
                  src={image}
                  fill={true}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container flex flex-row justify-center grow  flex-wrap lg:flex-nowrap  mx-auto">
        <div className="mx-auto p-12 basis-1/2">
         <Accordion onClick={handleClick} isOpen = {isOpen} data={searchParams} keyValue = "name"/>
         <Accordion onClick={handleClick} isOpen = {isOpen} data={searchParams} keyValue = "address"/>
        </div>
        {/* <div className=" min-h-fit">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.925840786126!2d101.62901827461445!3d3.1143224533665026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4be1db1b66f1%3A0xe8cf8ad2fdd7f1d7!2sThe%20Challenger%20Sports%20Centre%20PJ!5e0!3m2!1sen!2smy!4v1700566585168!5m2!1sen!2smy"
                width="600"
                height="450"
                loading="lazy"
                ></iframe>
            </div> */}
        <div className=" basis-1/2">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
