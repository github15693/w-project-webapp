/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class TechnologyDAL {
  Parse: ParseSDK;

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init TechnologyDAL success.");
  }

  getTechnologies(){
    alert(1);
  }

  getTechnology(){

  }

  createTechnology(){

  }

}
