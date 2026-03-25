
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function verifyPassword(pass:string):boolean {
  if (pass.length < 8) return false;
  if (!pass.match(/\w+\d{2}/)) return false;
  return true;
}