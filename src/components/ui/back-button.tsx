import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BackButtonProps = PropsWithChildren<
  { href: string } & ComponentProps<"a">
>;

function BackButton({ href, children, className, ...props }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge("text-neutral-500 inline-block mb-4", className)}
      {...props}
    >
      <ArrowLeft size={20} className="inline" />
      <span className="ml-1 font-semibold">{children}</span>
    </Link>
  );
}

export { BackButton };
