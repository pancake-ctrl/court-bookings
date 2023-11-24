import React from "react";
import Image from "next/image";
import Link from "next/link";
import venueData from "../mockdata/venue-data";

export default function venue() {
  return (
    <div className="w-[90%] mx-auto my-12 flex flex-wrap justify-around gap-y-24 gap-x-12 ">
      {venueData.map((venue) => {
        return (
          <div
            key={venue.id}
            className="hover:bg-slate-100 min-w-[448px] max-w-md max-h-fit h-[420px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link
              href={{
                pathname: `/venue/${encodeURIComponent(venue.id)}`,
                query: venue,
              }}
            >
              <div className="relative h-[40%] overflow-hidden">
                <Image
                  className="rounded-t-lg  object-cover"
                  src={venue.image[0]}
                  fill={true}
                  alt="image"
                />
              </div>
              <div className="m-2 flex">
                
                  {venue.category.map((a)=>{
                    return(
                      <span key={a} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {a}
                </span>
                    )
                  })}
               
              </div>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {venue.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {venue.address}
                </p>
                <Link
                  href={{
                    pathname: `/venue/${encodeURIComponent(venue.id)}`,
                    query: venue,
                  }}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Book Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
