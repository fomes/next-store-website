"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "../Button";
import { Currency } from "../Currency";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../Spinner";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/cart/cartSelectors";
import { Product } from "@/types";

export function Summary() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = useSelector(selectTotalPrice);
  const { products } = useSelector((rootReducer: any) => rootReducer.cartSlice);

  const onCheckout = async () => {
    const payload = products.map((item: Product) => ({
      id: item.id,
      qtd: item.quantity,
    }));

    try {
      setIsLoading(true);
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productsArr: payload }
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
    }

    if (searchParams.get("canceled")) {
      toast.error("Transação não concluída!");
      router.push("/cart");
    }
  }, [searchParams, router]);

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
        disabled={products.length === 0 || isLoading}
      >
        {isLoading ? <Spinner /> : "Confirmar"}
      </Button>
    </div>
  );
}
