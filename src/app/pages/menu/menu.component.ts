import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit{
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
