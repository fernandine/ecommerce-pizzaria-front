import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private service: PizzaService) {}

  ngOnInit() {
    this.getPizza();
  }

  getPizza(){
    this.service.getPizza().subscribe(api =>{
      this.pizzas =  api;
    })
  }

}

