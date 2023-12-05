"use client";

import { MouseEventHandler } from "react";

import { ShoppingCart } from "lucide-react";

import Image from "next/image";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

import { Currency } from "../Currency";
import { IconButton } from "../IconButton";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cart/slice";
import toast from "react-hot-toast";

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    dispatch(addProduct(data));
    toast.success("Adicionado ao carrinho");
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "bg-white group cursor-pointer rounded-xl border p-3 space-y-4",
        data?.stock! < 1 && "opacity-60"
      )}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt="Image"
          src={data?.images?.[0].url}
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={handleAddToCart}
              disabled={data?.stock! < 1}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <div className="flex items-center gap-x-4">
        {data?.stock! > 0 ? (
          <h3 className="font-medium text-[0.80rem] text-zinc-100 bg-lime-500 px-4 rounded-xl">
            Disponível
          </h3>
        ) : (
          <h3 className="font-medium text-[0.80rem] text-zinc-100 bg-red-500 px-4 rounded-xl">
            Esgotado
          </h3>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
}
