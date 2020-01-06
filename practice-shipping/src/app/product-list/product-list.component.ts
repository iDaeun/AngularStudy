import { Component, OnInit } from '@angular/core';
import { products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('share 버튼 클릭');
  }

  onNotify() {
    window.alert('notify 버튼 클릭');
  }
}
