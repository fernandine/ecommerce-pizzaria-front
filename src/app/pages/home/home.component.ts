import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderDetailsService) {}
  pizzaData: any;

  ngOnInit(): void {
    this.pizzaData = this.service.foodDetails;
  }


}