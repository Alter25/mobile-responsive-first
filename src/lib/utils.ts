import type { ProductsType } from "@/types/Types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const Productos: ProductsType[] = [
  {
    name: "ketchup",
    other:{
      imgUrl:"/groceryPictures/ketchup.png"
    }
  },
  {
    name: "mayonesa",
    other:{
      imgUrl:"/groceryPictures/mayonesa.png"
    }
  },
  {
    name: "churrumais",
    other:{
      imgUrl:"/groceryPictures/churrumais.png"
    }
  },
  {
    name: "tostitos",
    other:{
      imgUrl:"/groceryPictures/tostitos.png"
    }
  },
  {
    name: "rancheritos",
    other:{
      imgUrl:"/groceryPictures/rancheritos.png"
    }
  },
  {
    name: "leche lala entera",
    other:{
      imgUrl:"/groceryPictures/leche lala entera.png"
    }
  },
  {
    name: "nutrileche",
    other:{
      imgUrl:"/groceryPictures/nutrileche.png"
    }
  },
  {
    name: "leche lala light",
    other:{
      imgUrl:"/groceryPictures/leche lala light.png"
    }
  }
]