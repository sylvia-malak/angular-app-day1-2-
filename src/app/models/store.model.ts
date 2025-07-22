export enum DiscountsOffers {
  NoDiscount = "No Discount",
  Discount10 = "10%",
  Discount15 = "15%"
}

export interface Branch {
  id: number;
  name: string;
  location: string;
}

export class Store {
  constructor(
    public name: string,
    public branches: Branch[],
    public logo: string
  ) {}
}

/////////////////////////////////////
export interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  CategoryID: number;
  Discount: DiscountsOffers; 
}

export interface ICategory {
  ID: number;
  Name: string;
}