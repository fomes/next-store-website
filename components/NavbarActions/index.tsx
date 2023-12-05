"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { selectProductsCount } from "@/redux/cart/cartSelectors";
import { useSelector } from "react-redux";

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  const productsCount = useSelector(selectProductsCount);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {productsCount}
        </span>
      </Button>
    </div>
  );
}
