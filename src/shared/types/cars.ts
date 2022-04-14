export type Car = {
  colors: CarColors[];
  id: number;
  make: string;
  makeLogo: string;
  model: string;
  price: string;
  thumbnail: string;
  alt: string;
}

export type CarColors = {
  alt: string;
  color: string;
  photo: string;
}