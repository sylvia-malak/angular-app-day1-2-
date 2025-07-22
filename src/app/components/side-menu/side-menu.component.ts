import { Component } from '@angular/core';
import { DiscountsOffers } from '../../models/store.model';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  branches: string[] = ['Main Branch', 'Downtown Branch', 'Westside Branch'];
   currentDiscount: DiscountsOffers = DiscountsOffers.Discount10; 
}