import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {CustomerDAL} from "../../shared/services/dal/customer";

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'customers.component.html'
})

export class CustomersComponent {
  @ViewChild('CreateCustomerModal') public createCusModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //form data binding
  modalTitle = "Customer information"
  cusName = "";
  cusCompany = "";
  cusEmail = "";
  cusSkype = "";
  cusPhone = "";
  cusAddress = "";
  cusCountry = "";

  customers: any;
  cusKeys: any;

  constructor(private  customer: CustomerDAL){
    this.getCustomers();
    this.cusKeys = this.customer.cusKeys;
  }

  saveCustomer(){
    this.customer.createCustomer(
      this.cusName, this.cusCompany, this.cusEmail, this.cusSkype,
      this.cusPhone, this.cusAddress, this.cusCountry).then((data: any)=> {
        console.log(data);
        this.createCusModal.hide();
        this.getCustomers();
    })
  }

  updateCustomer(){
    this.createCusModal.show();
  }

  getCustomers(){
    this.customer.getCustomers().then((data: any) =>{
      this.customers = data;
    });
  }
}
