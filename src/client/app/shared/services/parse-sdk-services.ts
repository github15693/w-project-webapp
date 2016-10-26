/**
 * Created by khanhduong on 10/26/16.
 */
import { Injectable } from '@angular/core';
// import {} from '../../';
// import {Config} from '../config/env.config';
declare var Parse: any;
@Injectable()
export class ParseSDK {
  private appId = 'Socialobe-APPID';
  private rootScope:any = {};

  constructor(){
    Parse.initialize("W_PROJECT_APP_ID", 'unused');
    Parse.serverURL = "http://localhost:1337/api";
  }
  //Parse info
  init(){
    console.log(Parse);
  }

  /**
   * Query data to Parse
   * params: where: function, set query where
   * return promise resolve data
   */
  query(className: string, where:any){
    if(!className || className == '') return false;
    var query = new Parse.Query(className);
    if(where)
      query = where(query);
    return query.find();
  }

  newQuery(classObj:any){
    var query = new Parse.Query(classObj);
    return query;
  }

  /**
   * Query count data to Parse
   * params: where: function, set query where
   * return promise resolve data
   */
  queryCount(className: string, where:any){
    if(!className || className == '') return false;
    var query = new Parse.Query(className);
    if(where)
      query = where(query);
    return query.count();
  }

  /**
   * find data with or condition
   * params:
   *          - className: Parse class name
   *          - customfunction: function after create main query
   *          - queryFunctionList: array of function to create main query
   */
  orQuery(className:string, returnFindPromise: boolean, customfunction:Function, ...queryFunctionList: any []){
    var queryObjList:any = [];
    var queryList = [...queryFunctionList];
    for(var i in queryList){
      var query = new Parse.Query(className);
      query = queryList[i](query);
      queryObjList.push(query);
    }
    var mainQuery = Parse.Query.or(...queryObjList);
    if(customfunction){
      mainQuery = customfunction(mainQuery);
    }
    if(returnFindPromise)
      return mainQuery.find();
    else return mainQuery;
  }

  extendObject(className: string){
    if(!className || className == '') return false;
    var ParseObj = Parse.Object.extend(className);
    return ParseObj;
  }

  //create new Parse object
  newObject(className: string){
    if(!className || className == '') return false;
    var ParseObj = Parse.Object.extend(className);
    var parseObj = new ParseObj();
    return parseObj;
  }

  /**
   * Set data for a Parse object and save
   * params:
   *      - parseObj: Parse object
   *      - data: {key:value}
   *      - save: boolean (auto save object and return promise if save is true)
   */
  setData(parseObj:any, data:any, save: boolean){
    for(var i in data){
      parseObj.set(i, data[i]);
    }
    if(save == true){
      return parseObj.save();
    }
    else
      return parseObj;
  }

  saveAll(objList:any){
    return Parse.Object.saveAll(objList);
  }

  parseFile(name: string, file: any, save: boolean){
    var parseFile = new Parse.File(name, file);
    if(save == true){
      return parseFile.save();
    }
    return parseFile;
  }

  currentUser(){
    return Parse.User.current();
  }

  parse(){
    return Parse;
  }
}
