import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from "react";
import { cn } from "../lib/cn";
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
};
const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-border",
  destructive: "bg-destructive text-destructive-foreground",
};
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};
export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, fallback, alt, ...props }, ref) => (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm font-medium text-muted-foreground",
        className,
      )}
    >
      {props.src ? (
        <img
          ref={ref}
          alt={alt ?? ""}
          className="h-full w-full object-cover"
          {...props}
        />
      ) : (
        <span aria-label={alt}>{fallback}</span>
      )}
    </span>
  ),
);
Avatar.displayName = "Avatar";
export const Separator = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
));
Separator.displayName = "Separator";
export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "destructive";
};
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 text-sm",
        variant === "destructive"
          ? "border-destructive/50 text-destructive"
          : "border-border text-foreground",
        className,
      )}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";
export const Spinner = ({
  className,
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) => (
  <span
    role="status"
    aria-label={label}
    className={cn(
      "inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent",
      className,
    )}
  />
);
export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={cn("animate-pulse rounded-md bg-muted", className)}
    {...props}
  />
);
