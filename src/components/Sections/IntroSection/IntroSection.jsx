"use client";
import Link from "next/link";
import RedButton from "@/components/Buttons/RedButton";
import { motion } from "framer-motion";

export default function IntroSection({ text }) {
  return (
    <motion.div
      className="h-full sm:h-auto flex flex-col justify-between sm:justify-no sm:grid sm:grid-cols-3 sm:gap-4 xl:gap-x-8 pb-6 lg:pb-[30px] font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex flex-col sm:col-span-2 lg:col-span-1 text-sm xl:text-base">
        {text}
        <Link href="#portfolio">
          <RedButton addClass="p-2 px-3 text-base xl:text-xl font-courier mb-6 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
      </div>
      {/*  ------------ VIDEO ------------ */}
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/immagina/image/upload/v1741783185/IMMAGINA/Home%20Page/animazione-bosco-01_placeholder_axwgq7.jpg"
        className="sm:col-span-3 lg:col-span-2 object-cover lg:object-contain object-bottom sm:object-top w-full h-[50vh] xs:h-[70vh] md:max-h-[calc(100vh-478px)] lg:h-full lg:max-h-[calc(100vh-135px)] 2xl:w-full 2xl:h-auto 2xl:max-h-auto 2xl:object-cover 2xl:object-top"
      >
        <source src="/video/animazione-bosco-01.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
