

export interface CarruselCard{
  name: string;
  content: {
    header: string,
    text: string,
  }
}

export interface ProductsType{
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