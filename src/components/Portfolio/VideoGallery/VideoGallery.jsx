"use client";
import Image from "next/image";
import VideoGallerySideBar from "./VideoGallerySideBar/VideoGallerySideBar";
import PortfolioGalleryMobileHeader from "@/components/Portfolio/PortfolioGallery/PortfolioGalleryMobileHeader/PortfolioGalleryMobileHeader";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import { IoMdCloseCircle } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery({
  videoLink,
  title,
  path,
  shortDescription,
  longDescription,
  categoriesFromPath,
}) {
  return (
    <div className="flex flex-row h-screen w-full ">
      <div className="hidden lg:block">
        <VideoGallerySideBar
          title={title}
          path={path}
          shortDescription={shortDescription}
          longDescription={longDescription}
        />
      </div>
      <div className="lg:ml-[300px] flex-grow p-4 lg:pl-10 pb-10 bg-white">
        <div className="relative w-full h-full">
          {/* TESTO */}
          <div className="flex flex-col lg:hidden mt-[60px] p-3">
            <h1 className="text-xl sm:text-3xl font-bold font-courier text-custom-red pb-2">
              {title}
            </h1>
            <div className="text-2xs sm:text-base font-semibold text-custom-brown">
              {shortDescription}
            </div>
          </div>
          <iframe
            src={videoLink}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            width="100%"
            height="100%"
            title="CARIE"
            className="h-[400px] md:h-[600px] lg:h-full"
          ></iframe>
        </div>
      </div>
      {/* -------------------- MOBILE HEADER -------------------- */}
      <div className="lg:hidden text-custom-brown">
        <PortfolioGalleryMobileHeader
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          pathTree={["video"]}
        />
      </div>
    </div>
  );
}
