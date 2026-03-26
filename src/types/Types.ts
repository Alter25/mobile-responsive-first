export interface CarruselCard {
  name: string;
  content: {
    header: string;
    text: string;
  };
}

type Categoria = unknown;

export interface UserCreate{
  username: string;
  email: string;
  password: string;
}

export interface UserResponse{
  id: number;
  username: string;
  email: string;
}

export interface Token{
  access_token: string;
  token_type: string;
}

export interface ProductsType {
  id?: number;
  name: string;
  marca?: string;
  precio?: number;
  peso?: number;
  descripcion?: string;
  cantidad: number;
  categoria?: Categoria | Categoria[];
  other?: {
    fechaRegistro?: number;
    imgUrl: string;
  };
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}