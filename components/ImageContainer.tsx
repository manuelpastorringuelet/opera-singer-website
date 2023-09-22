"use client";

import Image from "next/image";
import { Maximize2, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";

import { Picture } from "@/types";
import { useState } from "react";
import { Button } from "./ui/button";
import DownloadButton from "./download-button";

type Props = {
  photo: Picture;
};

export default function ImageContainer({ photo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl"
        onClick={openModal}
      >
        <Image
          priority
          src={photo.image}
          alt={photo.alt}
          fill
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw = 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          className="object-cover align-top transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75"
        />
        <h2 className="absolute hidden h-full w-full items-center justify-center p-8 text-center opacity-80 transition-all duration-500 ease-in-out group-hover:flex">
          <span>
            {photo.alt ? photo.alt : "No description available for this image."}
          </span>
        </h2>
        <Maximize2
          onClick={openModal}
          className="absolute right-3 top-3 hidden cursor-pointer rounded bg-transparent p-1 hover:bg-primary/80 group-hover:flex"
        />
        <DownloadButton photo={photo} className="right-3" />
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="group fixed inset-0 z-40 flex max-h-screen cursor-pointer items-center justify-center overflow-auto bg-background/90"
          onClick={closeModal}
        >
          <div className="max-h-screen max-w-screen-lg rounded-lg">
            <span className="absolute p-4">
              {photo.alt
                ? photo.alt
                : "No description available for this image."}
            </span>
            <Image
              src={photo.image}
              alt={photo.alt}
              width={100}
              height={100}
              layout="responsive"
              className="max-h-screen object-cover transition-all duration-500 ease-in-out"
            />
          </div>
          <Minimize2 className="absolute right-3 top-3" />
          <DownloadButton photo={photo} />
        </div>
      )}
    </>
  );
}
