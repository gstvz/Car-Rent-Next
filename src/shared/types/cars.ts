export type Car = {
  colors: CarColors[];
  id: number;
  make: string;
  makeLogo: string;
  model: string;
  price: string;
  thumbnail: string;
}

export type CarColors = {
  color: string;
  photo: string;
}