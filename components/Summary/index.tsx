"use client";

import axios from "axios";

import useCart from "@/hooks/use-cart";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "../Button";
import { Currency } from "../Currency";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../Spinner";

export function Summary() {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productIds: items.map((item) => item.id) }
      );

      window.location = resp.data.url;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pagamento confirmado");
      router.push("/cart");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Algo deu errado");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Resumo da Compra</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Valor Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        className="w-full mt-6 flex justify-center"
        disabled={items.length === 0}
      >
        {isLoading ? <Spinner /> : "Confirmar"}
      </Button>
    </div>
  );
}
