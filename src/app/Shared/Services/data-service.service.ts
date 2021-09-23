import { Injectable } from '@angular/core';
import UserData1 from '../Provided-Data/UserData1.json';
import UserData2 from '../Provided-Data/UserData2.json';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  _UserData1 = UserData1;
  _UserData2 = UserData2;
  constructor() { }

  GetUserData1(){
    return this._UserData1;
  }

  GetUserData2(){
    return this._UserData2;
  }

  SaveLegateDataToLocalStorage(data:any){
    localStorage.clear();
    localStorage.setItem('data',JSON.stringify(data))
  }
  SaveLegateUserDataToLocalStorage(data:any){
    localStorage.clear();
    localStorage.setItem('data',JSON.stringify(data))
  }
  SaveTicketsDataToLocalStorage(data:any){
    localStorage.clear();
    localStorage.setItem('data',JSON.stringify(data))
  }
  SaveNotificationsDataToLocalStorage(data:any){
    localStorage.clear();
    localStorage.setItem('data',JSON.stringify(data))
  }
  GetChartDataFromLocalStorage(){
    let _ParsedData;
    _ParsedData = JSON.parse(localStorage.getItem('data')!);
    return _ParsedData;
  }
}
