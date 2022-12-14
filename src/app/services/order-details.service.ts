import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  pizzaData: any;

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Lombo Canadense",
      foodDetails:"mussarela, lombo defumado e cebola",
      foodPrice:59,
      foodImg:"https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2022/07/pizza-1.jpg?fit=1000%2C667&ssl=1"
    },
    {
      id:2,
      foodName:"Carne seca",
      foodDetails:"Carne seca, mussarela, cebola, parmesão e orégano",
      foodPrice:68,
      foodImg:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg?resize=980:*"
    },
    {
      id:3,
      foodName:"Frango com cheddar",
      foodDetails:"molho de tomate, mussarela, frango e cheddar",
      foodPrice:69,
      foodImg:"https://cdn1-production-images-kly.akamaized.net/LXjONiUp4bHoIrG3UJTA47zU0_c=/1x56:1000x619/680x383/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3364646/original/028640100_1612147060-shutterstock_2750208.jpg"
    },
    {
      id:4,
      foodName:"Toscana",
      foodDetails:"linguiça calabresa bacon e catupiry",
      foodPrice:58,
      foodImg:"https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
    },
    {
      id:5,
      foodName:"Quatro queijos",
      foodDetails:"Molho, mussarela, catupiry, provolone, queijo prato e orégano",
      foodPrice:75,
      foodImg:"https://s.yimg.com/ny/api/res/1.2/s41KxWqEKvuaxNge9Xs9Og--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU3NTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2021-10/c5fd29a0-2b9f-11ec-b3ff-30a01d58d24a"
    },
    {
      id:6,
      foodName:"Portuguesa",
      foodDetails:"mussarela, ovos, palmito, pimentão, ervilha, presunto e cebola",
      foodPrice:88,
      foodImg:"https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg?q=75"
    },
  ]
}
