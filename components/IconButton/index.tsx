import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export function IconButton({ onClick, icon, className }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition-all duration-300",
        className
      )}
    >
      {icon}
    </button>
  );
}
