import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontLaravelCrud';

  constructor(private serviceProduct : ProductsService){}

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(){
    this.serviceProduct.getProducts().subscribe(
      result => {
        console.log(result)
      }, (error) => {
        console.log(error)
      }
    )
  }
}




