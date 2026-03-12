export interface CarruselCard{
  name: string;
  content: {
    header: string,
    text: string,
  }
}

type Categoria = "algo";

export interface ProductsType{
  id?: number;
  name: string;
  marca?: string;
  precio?: number;
  peso?: number;
  cantidad?: number;
  categoria?: Categoria | Categoria[];
  other?: {
    fechaRegistro?: number;
    imgUrl: string;
  }
}