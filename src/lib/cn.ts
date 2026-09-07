export type ClassValue = string | false | null | undefined;
/** Joins conditional class names without adding a runtime dependency. */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}
