import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-product-page';
  mobile: boolean = false;
  showMenu: boolean = false;
  showLightbox: boolean = false;
  showCart: boolean = false;
  selectedItem: number = 1;
  addItems: number = 0;
  totalInCart: number = 0;

  ngOnInit(): void {
    this.mobile = (window.innerWidth <= 768) ? true : false;
  }

  onResize(event: any) {
    this.mobile = (event.target.innerWidth <= 768) ? true : false;
  }

  onClick(event: any) {
    this.showMenu = !this.showMenu;
  }

  onOpenLightbox(event: any) {
    this.showLightbox = true;
    document.getElementById("lightbox").style.backgroundColor = "hsl(0, 0%, 0%, 75%)";
    document.getElementById("lightbox").style.zIndex = "0";
  }

  onCloseLightbox(event: any) {
    this.showLightbox = false;
    document.getElementById("lightbox").style.backgroundColor = "transparent";
    document.getElementById("lightbox").style.zIndex = "-1";
  }

  addItem(event: any) {
    this.addItems++;
  }

  removeItem(event: any) {
    if (this.addItems !== 0) {
      this.addItems--;
    }
  }

  addToCart(event: any) {
    this.totalInCart += this.addItems;
    this.addItems = 0;
  }

  selectItem1(event: any) {
    this.selectedItem = 1;
  }

  selectItem2(event: any) {
    this.selectedItem = 2;
  }

  selectItem3(event: any) {
    this.selectedItem = 3;
  }

  selectItem4(event: any) {
    this.selectedItem = 4;
  }

  moveBack(event: any) {
    if (this.selectedItem === 1) {
      this.selectedItem = 4;
    } else {
      this.selectedItem--;
    }
  }

  moveForward(event: any) {
    if (this.selectedItem === 4) {
      this.selectedItem = 1;
    } else {
      this.selectedItem++;
    }
  }

  onCartClick(event: any) {
    this.showCart = !this.showCart;
  }

  onRemoveFromCart(event: any) {
    this.totalInCart = 0;
  }

  getTotalPrice(): string {
    let price = 125 * this.totalInCart;
    return "$" + price + ".00";
  }
}
