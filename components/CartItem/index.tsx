"use client";

import { X } from "lucide-react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import { Product } from "@/types";
import {
  decreaseProductQtd,
  increaseProductQtd,
  removeProduct,
} from "@/redux/cart/slice";

import { Currency } from "../Currency";
import { IconButton } from "../IconButton";
import toast from "react-hot-toast";

interface CartItemProps {
  data: Product;
}

export function CartItem({ data }: CartItemProps) {
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    dispatch(increaseProductQtd(data.id));
  };

  const handleDecreaseClick = () => {
    if (data.quantity! > 1) {
      dispatch(decreaseProductQtd(data.id));
    }
  };

  const handleDeleteCartItem = () => {
    dispatch(removeProduct(data.id));
    toast.success("Produto removido.");
  };

  return (
    <div>
      <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48">
          <Image
            fill
            src={data.images[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>

        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="absolute z-10 right-0 top-0">
            <IconButton onClick={handleDeleteCartItem} icon={<X size={15} />} />
          </div>

          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div className="flex justify-between">
              <p className="text-lg font-semibold text-black">{data.name}</p>
            </div>

            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{data.color.name}</p>
              <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                {data.size.name}
              </p>
            </div>

            <div>
              <Currency value={data.price} />
              <div className="mt-1">
                <p className="text-sm">Quantidade</p>

                <div className="flex justify-center items-center gap-2 border w-20 rounded-lg">
                  <span
                    className="px-2 cursor-pointer font-semibold"
                    onClick={handleDecreaseClick}
                  >
                    -
                  </span>
                  <span className="text-sm">{data.quantity}</span>
                  <span
                    className="px-2 cursor-pointer font-semibold"
                    onClick={handleIncreaseClick}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
