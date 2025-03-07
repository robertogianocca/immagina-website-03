"use client";
import { useState } from "react";
import BackBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/BackBar";
import Head from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Head";
import TextBox from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/TextBox";
import Link from "next/link";
import Header from "../../PortfolioGallery/PortfolioGallerySideBar/Header/Header";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const logoRed = "/images/logo/logo-immagina.svg";
export default function VideoGallerySideBar({
  title,
  pathTree,
  categoriesFromPath,
  shortDescription,
  longDescription,
}) {
  //   --------------------------------- READ MORE ---------------------------------
  const [isVisible, setIsVisible] = useState(true);

  function toggleTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.4, type: "spring", bounce: 0.2 }}
      className="fixed h-full w-[300px] flex flex-col gap-y-10 overflow-auto p-5 pb-[70px]  bg-custom-grey text-custom-brown z-50"
    >
      {/* ------ HOME E BACK BUTTONS ------ */}
      <BackBar pathTree={["video"]} categoriesFromPath={["video"]} />

      {/* ------ PATH, TITLE, DESCRIPTION ------ */}

      <div className="pb-6">
        <Head title={title} shortDescription={shortDescription} toggleTextBox={toggleTextBox} />
      </div>
      {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
      <TextBox
        toggleTextBox={toggleTextBox}
        isVisible={isVisible}
        longDescription={longDescription}
      />
    </motion.aside>
  );
}
