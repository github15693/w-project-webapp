/**
 * Created by khanhduong on 11/16/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class FileDAL {
  Parse: ParseSDK;

  constructor(@Inject(ParseSDK) Parse: ParseSDK) {
    this.Parse = Parse;
    this.Parse.init()
    console.log("init FileDAL success.");
  }

  newfile(name: string, file: any){
    return this.Parse.parseFile(name, file, false);
  }

  savefile(name: string, file: any){
    return this.Parse.parseFile(name, file, true);
  }

}
