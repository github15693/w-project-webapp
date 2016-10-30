import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {CustomerDAL} from "../../shared/services/dal/customer";

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'customers.component.html'
})

export class CustomersComponent {
  @ViewChild('CreateCustomerModal') public createModal:ModalDirective;

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

  constructor(private  customer: CustomerDAL){
    this.customer.getCustomers();
  }

  saveCustomer(){
    this.customer.createCustomer(
      this.cusName, this.cusCompany, this.cusEmail, this.cusSkype,
      this.cusPhone, this.cusAddress, this.cusCountry).then((data)=>{
      console.log(data);
      this.createModal.hide();
    }
    )
  }
}
