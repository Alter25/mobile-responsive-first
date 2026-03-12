

export interface CarruselCard{
  name: string;
  content: {
    header: string,
    text: string,
  }
}

export interface ProductsType{
  id?: number;
  name: string;
  marca?: string;
  precio?: number;
  peso?: number;
  cantidad?: number;
  other?: {
    fechaRegistro?: number;
    imgUrl: string;
  }
}