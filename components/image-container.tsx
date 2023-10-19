"use client";

import Image from "next/image";
import { Maximize2, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

import { Picture } from "@/types";
import { useState } from "react";
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
    setIsLoading(true);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl text-white"
        onClick={openModal}
      >
        <Image
          priority
          src={photo.image}
          alt={photo.alt}
          fill
          sizes="(max-width: 590px) 90vw, (max-width: 926px) 45vw, (max-width: 1190px) 30vw, 22vw"
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
      </div>

      {/* Modal */}
      {isModalOpen && photo.image && (
        <div
          className="group fixed inset-0 z-40 flex max-h-screen cursor-pointer items-center justify-center overflow-auto bg-background/90"
          onClick={closeModal}
        >
          <div className="relative flex max-h-screen w-full max-w-screen-lg flex-col items-center rounded-lg text-white sm:w-auto">
            <span className="absolute bottom-3 left-3">
              {photo.photographer && photo.photographer}
            </span>{" "}
            {isLoading && (
              <ClipLoader
                color="#ffffff"
                loading={isLoading}
                cssOverride={{ display: "block" }}
                size={150}
                className="absolute flex h-full w-full items-center justify-center"
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
              className="z-30 max-h-screen w-screen object-cover"
            />
            {!isLoading && (
              <div className="z-30">
                <Minimize2 className="absolute right-3 top-3" />
                <DownloadButton photo={photo} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
