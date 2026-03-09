export interface GroceryItemType{
  name: string;
  imageUrl: string;
  price?: number;
  category?: CategoryType | CategoryType[];
}

type CategoryType = "Lacteos" | "Bebidas" | "Papitas" | "Limpieza";

export interface CarruselCard{
  name: string;
  content: {
    header: string,
    text: string,
  }
}
