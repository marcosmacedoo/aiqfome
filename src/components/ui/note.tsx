import { ReactNode, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NoteProps extends ComponentProps<"div"> {
  children: ReactNode;
}

function Note({ children, className, ...props }: NoteProps) {
  return (
    <span
      className={twMerge(
        "p-1.5 text-sm bg-neutral-50 rounded-sm font-bold inline-block",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Note };
