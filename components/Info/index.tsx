"use client";

import { Product } from "@/types";
import { Currency } from "../Currency";
import { Button } from "../Button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cart/slice";
import toast from "react-hot-toast";

interface InfoProps {
  data: Product;
}

export function Info({ data }: InfoProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(data));
    toast.success("Adicionado ao carrinho");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tamanho:</h3>
          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Cor:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          ></div>
        </div>

        <div className="flex items-center gap-x-4">
          {data?.stock! > 0 ? (
            <h3 className="font-medium text-zinc-100 bg-lime-500 px-4 rounded-xl">
              Disponível
            </h3>
          ) : (
            <h3 className="font-medium text-zinc-100 bg-red-500 px-4 rounded-xl">
              Esgotado
            </h3>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={handleAddToCart}
          disabled={data?.stock! < 1}
          className="flex items-center gap-x-2"
        >
          Comprar
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
