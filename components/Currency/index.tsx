"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
