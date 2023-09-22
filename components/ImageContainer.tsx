"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import { Picture } from "@/types";

type Props = {
  photo: Picture;
};

export default function ImageContainer({ photo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="group relative h-64 overflow-hidden rounded-xl"
    >
      <Image
        src={photo.image}
        alt={photo.alt}
        fill
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw = 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover transition-all duration-500 ease-in-out group-hover:opacity-75"
      />
      <h2 className="absolute hidden h-full w-full items-center justify-center p-8 text-center opacity-80 transition-all duration-500 ease-in-out group-hover:flex">
        <span>
          {photo.alt ? photo.alt : "No description available for this image."}
        </span>
      </h2>
      <a
        href={`${photo.image}?dl=`}
        download
        className="absolute bottom-3 right-3 hidden rounded bg-transparent group-hover:flex"
      >
        <Download size={20} />
      </a>
    </motion.div>
  );
}
