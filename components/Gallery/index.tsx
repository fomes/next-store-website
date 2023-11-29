"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";

import { GalleryTab } from "../GalleryTab";

interface GalleryProps {
  images: ImageType[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className={"aspect-square w-96"}>
        {images.map((image) => (
          <Tab.Panel
            key={image.id}
            className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
          >
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
