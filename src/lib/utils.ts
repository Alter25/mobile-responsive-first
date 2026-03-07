import type { GroceryItemType } from "@/types/Types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const Productos: GroceryItemType[] = [
  {
    name: "ketchup",
    imageUrl:"/groceryPictures/ketchup.png"
  },
  {
    name: "mayonesa",
    imageUrl:"/groceryPictures/mayonesa.png"
  },
  {
    name: "churrumais",
    imageUrl:"/groceryPictures/churrumais.png"
  },
  {
    name: "tostitos",
    imageUrl:"/groceryPictures/tostitos.png"
  },
  {
    name: "rancheritos",
    imageUrl:"/groceryPictures/rancheritos.png"
  }
]