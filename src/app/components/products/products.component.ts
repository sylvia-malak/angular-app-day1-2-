import { Component } from '@angular/core';
import { DiscountsOffers} from '../../models/store.model';
import { IProduct } from '../../models/store.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  isNoDiscount(discount: DiscountsOffers): boolean {
    return discount === DiscountsOffers.NoDiscount;
  }
  Discount: DiscountsOffers = DiscountsOffers.Discount15; 
  Store = {
    Name: "My Angular Store",
    Branches: ["Branch 1", "Branch 2"],
    
  };
  ClientName: string = "Guest";

  
  ProductList: IProduct[] = [
    { 
      ID: 1, 
      Name: "T-Shirt", 
      Quantity: 5, 
      Price: 100, 
      Img: "https://i.postimg.cc/CxFqPrMn/tshirt.jpg", 
      CategoryID: 1,
      Discount: DiscountsOffers.Discount10 
    },
    { 
      ID: 2, 
      Name: "Shoes", 
      Quantity: 0, 
      Price: 200, 
      Img: "https://i.postimg.cc/rpw5mnv2/shoes.jpg", 
      CategoryID: 1,
      Discount: DiscountsOffers.NoDiscount
    },
    { 
      ID: 3, 
      Name: "Phone", 
      Quantity: 3, 
      Price: 150, 
      Img: "https://i.postimg.cc/Fs0ynJj8/phone.jpg", 
      CategoryID: 2,
      Discount: DiscountsOffers.Discount15
    },
    { 
      ID: 4, 
      Name: "Hat", 
      Quantity: 6, 
      Price: 100, 
      Img: "https://i.postimg.cc/4xzhxbYQ/hat.jpg", 
      CategoryID: 2,
      Discount: DiscountsOffers.Discount15
    }
  ];
  IsPurchased: boolean = false;
  selectedCategory: number | null = null;


  togglePurchase(): void {
    this.IsPurchased = !this.IsPurchased;
  }

  decreaseQuantity(product: IProduct): void {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }

  get filteredProducts(): IProduct[] {
    if (this.selectedCategory === null) {
      return this.ProductList;
    }
    return this.ProductList.filter(product => product.CategoryID === this.selectedCategory);
  }

  getRowColor(quantity: number): string {
    if (quantity === 0) return 'red';
    else if (quantity === 1) return 'yellow';
    else if (quantity === 2) return 'orange';
    else return 'green';
  }
}


