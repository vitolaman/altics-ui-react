import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";
export const Stack = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { gap?: "sm" | "md" | "lg" }
>(({ className, gap = "md", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col",
      { sm: "gap-2", md: "gap-4", lg: "gap-6" }[gap],
      className,
    )}
    {...props}
  />
));
Stack.displayName = "Stack";
export const Container = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
));
Container.displayName = "Container";
export const Grid = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { columns?: 1 | 2 | 3 | 4 }
>(({ className, columns = 1, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid gap-4",
      {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
      }[columns],
      className,
    )}
    {...props}
  />
));
Grid.displayName = "Grid";
