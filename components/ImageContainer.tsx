"use client";
import type { Photo } from "@/models/Images";
import Image from "next/image";
import { Download } from "lucide-react";

type Props = {
  photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
  return (
    <div className="group relative h-64 overflow-hidden rounded-xl bg-gray-200">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw = 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover transition-all duration-500 ease-in-out group-hover:opacity-75"
      />
      <h2 className="absolute hidden h-full w-full items-center justify-center p-8 text-center opacity-50 transition-all duration-500 ease-in-out group-hover:flex">
        <span>
          {photo.alt
            ? photo.alt
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum."}
        </span>
      </h2>
      <a
        href={photo.src.large}
        download
        className="absolute bottom-3 right-3 hidden rounded bg-transparent group-hover:flex"
      >
        <Download size={16} />
      </a>
    </div>
  );
}
