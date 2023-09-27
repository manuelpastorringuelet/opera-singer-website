"use client";

import Image from "next/image";
import { Maximize2, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

import { Picture } from "@/types";
import { use, useEffect, useState } from "react";
import DownloadButton from "./download-button";

type Props = {
  photo: Picture;
};

export default function ImageContainer({ photo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
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
        className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl text-white"
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
        <h2 className="absolute bottom-3 left-3 hidden opacity-80 transition-all duration-500 ease-in-out group-hover:flex">
          {photo.photographer && photo.photographer}
        </h2>
        <Maximize2
          onClick={openModal}
          className="absolute right-3 top-3 hidden cursor-pointer rounded bg-transparent p-1 hover:bg-primary/80 group-hover:flex"
        />
        <DownloadButton photo={photo} className="hidden group-hover:flex" />
      </motion.div>

      {/* Modal */}
      {isModalOpen && photo.image && (
        <div
          className="group fixed inset-0 z-40 flex max-h-screen cursor-pointer items-center justify-center overflow-auto bg-background/90"
          onClick={closeModal}
        >
          <div className="relative flex max-h-screen max-w-screen-lg flex-col items-center rounded-lg text-white">
            <span className="absolute bottom-3 left-3">
              {photo.photographer && photo.photographer}
            </span>{" "}
            {isLoading && (
              <ClipLoader
                color="#ffffff"
                loading={isLoading}
                cssOverride={{ display: "block" }}
                size={150}
                className="absolute"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
            <Image
              onLoad={handleImageLoad}
              quality={100}
              src={photo.image}
              alt={photo.alt}
              width={100}
              height={100}
              layout="responsive"
              className="max-h-screen object-cover"
            />
            {!isLoading && (
              <>
                <Minimize2 className="absolute right-3 top-3" />
                <DownloadButton photo={photo} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
