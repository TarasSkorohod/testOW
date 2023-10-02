import Image from "next/image";
import images from "@/public/PAINT_PROTECTION/test1.png";
import React from "react";

export function GalleryPages() {
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All Partpholio
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Window Tint
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={500}
            height={500}
            src={images}
            alt="bg"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={500}
            height={500}
            src={images}
            alt="bg"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={500}
            height={500}
            src={images}
            alt="bg"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={500}
            height={500}
            src={images}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
}
