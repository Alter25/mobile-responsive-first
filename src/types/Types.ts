export interface GroceryItemType{
  name: string;
  imageUrl: string;
  price?: number;
  category?: CategoryType | CategoryType[];
}

type CategoryType = "Lacteos" | "Bebidas" | "Papitas" | "Limpieza";