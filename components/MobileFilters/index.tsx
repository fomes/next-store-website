"use client";

import { useState } from "react";

import { Plus, X } from "lucide-react";

import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { CategoryFilter } from "../CategoryFilter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as={"div"}
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel
              className={
                "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl"
              }
            >
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X />} onClick={onClose} />
              </div>

              <div className="p-4">
                <CategoryFilter valueKey="sizeId" name="Sizes" data={sizes} />
                <CategoryFilter
                  valueKey="colorId"
                  name="Colors"
                  data={colors}
                />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
