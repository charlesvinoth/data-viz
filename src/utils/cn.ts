import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A utility function to merge class names.
 *
 * This function is a wrapper around `clsx` and `twMerge`. It takes in any
 * number of class names, merges them together using `clsx`, and then
 * uses `twwind-merge` to merge the resulting class names with the
 * Tailwind CSS classes.
 *
 * @param inputs - The class names to merge.
 * @returns The merged class name.
 */
export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
