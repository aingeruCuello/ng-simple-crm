import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  isVisible: boolean;
  constructor() { }

  ngOnInit() {
    this.title= "Customers";
    this.isVisible = true;
    this.people=[
      {
        id: 1, name: 'ion Egizu', city:'Elizondo', orderTotal:9.99, customerSince: new Date(2014, 7, 10)
      },
      {
        id: 2, name: 'Aingeru Cuello', city:'Ansoain', orderTotal:19.99, customerSince: new Date(2012, 2, 22)
      },
      {
        id: 3, name: 'Juan sin tierra', city:'Tudela', orderTotal:99.99, customerSince: new Date(2019, 10, 13)
      },
      {
        id: 4, name: 'Ana Tirapu', city:'San Juan', orderTotal:599.99, customerSince: new Date(2012, 10, 31)
      }
    ];
  }
changeVisibility(){
  if (this.isVisible) {
    this.isVisible = false
  }else{
    this.isVisible = true
  }
}

}
