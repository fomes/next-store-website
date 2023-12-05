"use client";

import { CartItem } from "@/components/CartItem";
import { Container } from "@/components/Container";
import { Summary } from "@/components/Summary";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface CartPageProps {
  cart: Product[];
}

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { products } = useSelector((rootReducer: any) => rootReducer.cartSlice);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Carrinho</h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {products.length === 0 && (
                <p className="text-neutral-500">Seu carrinho está vazio</p>
              )}

              <ul>
                {products.map((item: Product) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
