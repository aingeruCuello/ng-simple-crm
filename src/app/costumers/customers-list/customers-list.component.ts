import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {

    filteredCustomer: ICustomer[]= [];
    customersOrderTotal: number;
    currencyCode: string = "USD";

  constructor() { }

  ngOnInit() {
   
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomer.forEach((cust:ICustomer)=> {
      this.customersOrderTotal +=cust.orderTotal;
      console.log('suma: '+this.customersOrderTotal)

    });
  }

}
