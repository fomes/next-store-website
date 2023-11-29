"use client";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { GalleryTab } from "../GalleryTab";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab image={image} key={image.id} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className={"grid grid-cols-4 gap-6"}>
        {images.map((image) => (
          <Tab.Panels
            key={image.id}
            className={
              "aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
            }
          >
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </Tab.Panels>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
