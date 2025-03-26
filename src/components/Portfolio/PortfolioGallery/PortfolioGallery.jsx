"use client";
import { useState } from "react";
import Image from "next/image";
import PortfolioGallerySideBar from "./PortfolioGallerySideBar/PortfolioGallerySideBar";
import PortfolioGalleryMobileHeader from "@/components/Portfolio/PortfolioGallery/PortfolioGalleryMobileHeader/PortfolioGalleryMobileHeader";
import { motion } from "framer-motion";

export default function PortfolioGallery({
  currentCategoryPortfolio,
  title,
  shortDescription,
  longDescription,
  pathTree,
  categoriesFromPath = null,
}) {
  const picturesList = currentCategoryPortfolio.images.pictures;
  const [currentIndex, setIndex] = useState(0);
  const [imageQuality, setImageQuality] = useState(1);

  // Image quality setting
  const handleImageLoad = () => {
    setImageQuality(70);
  };

  {
    /* -------------------- MOBILE GALLERY -------------------- */
  }
  const mobileGallery = picturesList.map((item, index) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 + index * 0.3 }} // Stagger effect
      >
        <Image
          src={item.url}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(max-width: 1200px) 100vw, 70vw"
          priority={true}
          quality={imageQuality}
          onLoad={handleImageLoad}
        />
        {/* ------ Caption ------ */}
        <div
          className={`text-custom-brown bg-custom-grey p-2 flex items-center ${
            !item.shortDescription && "hidden"
          }`}
        >
          <p className="text-xs italic font-semibold">{item.shortDescription}</p>
        </div>
      </motion.div>
    );
  });

  // const coverTitle =
  //   currentIndex === 0 ? (
  //     <div className="lg:absolute lg:left-0 lg:right-0 lg:top-0 mb-2 lg:m-auto lg:p-2 lg:aspect-cover lg:h-full">
  //       <h1 className="font-courier font-bold text-2xl lg:text-4xl text-red-600">{title}</h1>
  //     </div>
  //   ) : (
  //     ""
  //   );

  return (
    <div className="flex h-screen w-full bg-custom-white">
      {/* -------------------- SIDEBAR -------------------- */}
      <div className="hidden lg:block">
        <PortfolioGallerySideBar
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          picturesList={picturesList}
          setIndex={setIndex}
          currentIndex={currentIndex}
          pathTree={pathTree}
          categoriesFromPath={categoriesFromPath}
        />
      </div>
      {/* -------------------- MOBILE HEADER -------------------- */}
      <div className="lg:hidden text-custom-brown">
        <PortfolioGalleryMobileHeader
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          pathTree={pathTree}
        />
      </div>
      {/* ---------- IMAGE CONTAINER DESKTOP ---------- */}
      <motion.div
        className="hidden lg:block ml-[300px] p-4 pb-10 z-10 h-screen w-full"
        onContextMenu={(e) => e.preventDefault()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Centering Container */}
        <div className="flex justify-center items-center w-full h-full">
          {/* Image Wrapper */}
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              priority={true}
              src={picturesList[currentIndex].url}
              alt={picturesList[currentIndex].alt || title}
              width={picturesList[currentIndex].width}
              height={picturesList[currentIndex].height}
              className="object-contain max-w-full max-h-full"
              onLoad={handleImageLoad}
              quality={imageQuality}
              sizes="(max-width: 1400px) 100vw, 70vw"
            />
          </div>
        </div>
      </motion.div>
      {/* ---------- MOBILE GALLERY ---------- */}
      <div className="flex flex-col min-h-screen overflow-y-auto lg:hidden mt-[60px] p-3 pb-[90px]">
        <h1 className="text-xl sm:text-3xl font-bold font-courier text-custom-red pb-2">{title}</h1>
        {/* ---------- MOBILE GALLERY DESCRIPTION ---------- */}
        <div className="text-2xs sm:text-base font-semibold text-custom-brown pb-4">
          {shortDescription}
        </div>
        <div className="flex flex-col gap-y-8" onContextMenu={(e) => e.preventDefault()}>
          {mobileGallery}
        </div>
      </div>
    </div>
  );
}
