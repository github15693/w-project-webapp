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
  @ViewChild('ConfirmDeleteModal') public deleteCusModal:ModalDirective;
  //code dai ko biet chay ko kaka chua thu
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

  currentObjectId: any;
  currentObject: any;

  constructor(private  customerDAL: CustomerDAL){
    this.getCustomers();
    this.cusKeys = this.customerDAL.cusKeys;
    this.currentObjectId = "";
  }

  saveCustomer(){
    if(this.currentObjectId == ""){ //check to create object
      this.customerDAL.createCustomer(
        this.cusName, this.cusCompany, this.cusEmail, this.cusSkype,
        this.cusPhone, this.cusAddress, this.cusCountry).then((data: any)=> {
        console.log(data);
        this.createCusModal.hide();
        this.getCustomers();
      })
    }else{
      this.customerDAL.updateCustomer(this.setData2Save(this.getObjectById(this.currentObjectId))).then((data: any) => {
        this.createCusModal.hide();
      });
    }
  }

  destroyCustomer(){
    this.customerDAL.destroyCustomer(this.getObjectById(this.currentObjectId)).then((data: any) => {
      this.deleteCusModal.hide();
      this.destroyObjectById(this.currentObjectId);
    });
  }

  getObjectById(objectId: any){
    var customer: any;
    this.customers.forEach((cus: any) => {
      if(cus.id == objectId){
        customer = cus;
        return false;
      }
    });
    return customer;
  }

  destroyObjectById(objectId: any){
    var index = this.customers.indexOf(this.getObjectById(objectId));
    if(index > -1){
      this.customers.splice(index, 1);
    }
  }

  showCreateModal(){
    this.currentObjectId = "";
    this.createCusModal.show();
  }

  showUpdateModal(customerId: any){
    this.currentObjectId = customerId;
    this.createCusModal.show();
    var cus: any;
    cus = this.getObjectById(customerId);
    if(cus != null){
      this.cusName = cus.get(this.cusKeys.name);
      this.cusCompany = cus.get(this.cusKeys.company);
      this.cusEmail = cus.get(this.cusKeys.email);
      this.cusSkype = cus.get(this.cusKeys.skype);
      this.cusPhone = cus.get(this.cusKeys.phone);
      this.cusAddress = cus.get(this.cusKeys.address);
      this.cusCountry = cus.get(this.cusKeys.country);
    }
  }

  showDeleteModal(customerId: any){
    this.currentObjectId = customerId;
    this.deleteCusModal.show();
  }

  setData2Save(cusObject: any){
    cusObject.set(this.cusKeys.name, this.cusName);
    cusObject.set(this.cusKeys.company, this.cusCompany);
    cusObject.set(this.cusKeys.email, this.cusEmail);
    cusObject.set(this.cusKeys.skype, this.cusSkype);
    cusObject.set(this.cusKeys.phone, this.cusPhone);
    cusObject.set(this.cusKeys.address,this.cusAddress );
    cusObject.set(this.cusKeys.country, this.cusCountry);
    return cusObject;
  }

  getCustomers(){
    this.customerDAL.getCustomers().then((data: any) =>{
      this.customers = data;
    });
  }
}
