import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from 'src/app/entities/Fooditem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  
  constructor(private fs:FoodService) { }

  order:Array<Fooditem> = [];
  orderAmounts:Array<number> = [];
  total:number = 0.00;
  tax:number = 0.06;

  ngOnInit() {
    this.makeOrder();
  }

  makeOrder(){
    this.order = this.fs.order;
    this.orderAmounts = this.fs.orderAmounts;
    this.tax *= this.fs.total;
    this.total = this.fs.total * 1.06;
    
    console.log("makeOrder");
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
  }



}

