import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Shared/Services/data-service.service';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css']
})
export class CardsComponentComponent implements OnInit {


  constructor(private _DataServiceService: DataServiceService) { }

  _ChartDataToSend: any;
  _Status:any;



  _TotalLegateEmployee: any;
  _TotalLegateNewAccountsData: any = [];
  _TotalLegateVerifiedAccountsData: any = [];
  _TotalLegateRegisteredAccountsData: any = [];
  _TotalLegateNewAccounts = 0;
  _TotalLegateVerifiedAccounts = 0;
  _TotalLegateRegisteredAccounts = 0;





  _TotalLegateUsers: any;
  _TotalLegateUserNewAccounts = 0;
  _TotalLegateUserVerifiedAccounts = 0;
  _TotalLegateUserRegisteredAccounts = 0;
  _TotalLegateUserNewAccountsData: any = [];
  _TotalLegateUserVerifiedAccountsData: any = [];
  _TotalLegateUserRegisteredAccountsData: any = [];






  _TotalTickets: any;
  _TotalTicketsNewAccounts = 0;
  _TotalTicketsVerifiedAccounts = 0;
  _TotalTicketsRegisteredAccounts = 0;
  _TotalTicketsNewAccountsData: any = [];
  _TotalTicketsVerifiedAccountsData: any = [];
  _TotalTicketsRegisteredAccountsData: any = [];




  _TotalNotifications: any;
  _TotalNotificationsNewAccounts = 0;
  _TotalNotificationsVerifiedAccounts = 0;
  _TotalNotificationsRegisteredAccounts = 0;
  _TotalNotificationsNewAccountsData: any = [];
  _TotalNotificationsVerifiedAccountsData: any = [];
  _TotalNotificationsRegisteredAccountsData: any = [];





  _ShowCards: any = [];

  ngOnInit(): void {

    this.ProcessTotalLegateEmployee();
    this.ProcessTotalLegateUsere();
    this.ProcessTotalTickets();
    this.ProcessTotalNotifications();
    this.ProcessCards();

  }

  ProcessTotalLegateEmployee() {
    let _TemporaryData = this._DataServiceService.GetUserData1();
    this._TotalLegateEmployee = _TemporaryData.historicalData.legateEmployee;
    this._TotalLegateEmployee.map((_KeyPair: any) => {
      this._TotalLegateNewAccounts = this._TotalLegateNewAccounts + _KeyPair.newAccountCreated;
      this._TotalLegateVerifiedAccounts = this._TotalLegateVerifiedAccounts + _KeyPair.totalVerifiedAccount;
      this._TotalLegateRegisteredAccounts = this._TotalLegateRegisteredAccounts + _KeyPair.totalRegisteredAccount;

      this._TotalLegateNewAccountsData.push({
        NewAccounts: _KeyPair.newAccountCreated,
        Month: _KeyPair.latestUpdate
      });
      this._TotalLegateVerifiedAccountsData.push({
        VerifiedAccounts: _KeyPair.totalVerifiedAccount,
        Month: _KeyPair.latestUpdate
      });
      this._TotalLegateRegisteredAccountsData.push({
        RegisteredAccounts: _KeyPair.totalRegisteredAccount,
        Month: _KeyPair.latestUpdate
      })
    })
  }

  ProcessTotalLegateUsere() {
    let _TemporaryData = this._DataServiceService.GetUserData1();
    this._TotalLegateUsers = _TemporaryData.historicalData.legateUsers;
    this._TotalLegateUsers.map((_KeyPair: any) => {
      this._TotalLegateUserNewAccounts = this._TotalLegateUserNewAccounts + _KeyPair.newAccountCreated;
      this._TotalLegateUserVerifiedAccounts = this._TotalLegateUserVerifiedAccounts + _KeyPair.totalVerifiedAccount;
      this._TotalLegateUserRegisteredAccounts = this._TotalLegateUserRegisteredAccounts + _KeyPair.totalRegisteredAccount;

      this._TotalLegateUserNewAccountsData.push({
        NewAccounts: _KeyPair.newAccountCreated,
        Month: _KeyPair.latestUpdate
      });
      this._TotalLegateUserVerifiedAccountsData.push({
        VerifiedAccounts: _KeyPair.totalVerifiedAccount,
        Month: _KeyPair.latestUpdate
      });
      this._TotalLegateUserRegisteredAccountsData.push({
        RegisteredAccounts: _KeyPair.totalRegisteredAccount,
        Month: _KeyPair.latestUpdate
      })
    })
  }

  ProcessTotalTickets() {
    let _TemporaryData = this._DataServiceService.GetUserData2();
    this._TotalTickets = _TemporaryData.tickets;
    this._TotalTickets.map((_KeyPair: any) => {
      this._TotalTicketsNewAccounts = this._TotalTicketsNewAccounts + _KeyPair.newAccountCreated;
      this._TotalTicketsVerifiedAccounts = this._TotalTicketsVerifiedAccounts + _KeyPair.totalVerifiedAccount;
      this._TotalTicketsRegisteredAccounts = this._TotalTicketsRegisteredAccounts + _KeyPair.totalRegisteredAccount;

      this._TotalTicketsNewAccountsData.push({
        NewAccounts: _KeyPair.newAccountCreated,
        Month: _KeyPair.latestUpdate
      });
      this._TotalTicketsVerifiedAccountsData.push({
        VerifiedAccounts: _KeyPair.totalVerifiedAccount,
        Month: _KeyPair.latestUpdate
      });
      this._TotalTicketsRegisteredAccountsData.push({
        RegisteredAccounts: _KeyPair.totalRegisteredAccount,
        Month: _KeyPair.latestUpdate
      })
    })
  }

  ProcessTotalNotifications() {
    let _TemporaryData = this._DataServiceService.GetUserData2();
    this._TotalNotifications = _TemporaryData.notifications;
    this._TotalNotifications.map((_KeyPair: any) => {
      this._TotalNotificationsNewAccounts = this._TotalNotificationsNewAccounts + _KeyPair.newAccountCreated;
      this._TotalNotificationsVerifiedAccounts = this._TotalNotificationsVerifiedAccounts + _KeyPair.totalVerifiedAccount;
      this._TotalNotificationsRegisteredAccounts = this._TotalNotificationsRegisteredAccounts + _KeyPair.totalRegisteredAccount;

      this._TotalNotificationsNewAccountsData.push({
        NewAccounts: _KeyPair.newAccountCreated,
        Month: _KeyPair.latestUpdate
      });
      this._TotalNotificationsVerifiedAccountsData.push({
        VerifiedAccounts: _KeyPair.totalVerifiedAccount,
        Month: _KeyPair.latestUpdate
      });
      this._TotalNotificationsRegisteredAccountsData.push({
        RegisteredAccounts: _KeyPair.totalRegisteredAccount,
        Month: _KeyPair.latestUpdate
      })
    })
  }

  ProcessCards() {
    this._ShowCards.push({
      Name: 'LegateEmployees',
      NewAccounts: this._TotalLegateNewAccounts,
      VerifiedAccounts: this._TotalLegateVerifiedAccounts,
      RegisteredAccounts: this._TotalLegateRegisteredAccounts,
      Date: '13 june 2020'
    });

    this._ShowCards.push({
      Name: 'LegateUsers',
      NewAccounts: this._TotalLegateUserNewAccounts,
      VerifiedAccounts: this._TotalLegateUserVerifiedAccounts,
      RegisteredAccounts: this._TotalLegateUserRegisteredAccounts,
      Date: '15 sep 2020'
    });

    this._ShowCards.push({
      Name: 'Tickets',
      NewAccounts: this._TotalTicketsNewAccounts,
      VerifiedAccounts: this._TotalTicketsVerifiedAccounts,
      RegisteredAccounts: this._TotalTicketsRegisteredAccounts,
      Date: '1 jan 2021'
    });

    this._ShowCards.push({
      Name: 'Notifications',
      NewAccounts: this._TotalNotificationsNewAccounts,
      VerifiedAccounts: this._TotalNotificationsVerifiedAccounts,
      RegisteredAccounts: this._TotalNotificationsRegisteredAccounts,
      Date: '12 March 2020'
    });
  }


  SendDataToCharts(data: any) {
    if (data === 'LegateEmployees') {
      this._Status = null;
      let _TemporaryArray = [];
      _TemporaryArray.push({ Name: 'LegateEmployees' });
      _TemporaryArray.push(this._TotalLegateNewAccountsData);
      _TemporaryArray.push(this._TotalLegateVerifiedAccountsData);
      _TemporaryArray.push(this._TotalLegateRegisteredAccountsData);
      this._Status = 0;
      this._DataServiceService.SaveLegateDataToLocalStorage(_TemporaryArray);
      this._ChartDataToSend = this._DataServiceService.GetChartDataFromLocalStorage();
    }
    if (data === 'LegateUsers') {
      this._Status = null;
      let _TemporaryArray = [];
      _TemporaryArray.push({ Name: 'LegateUsers' });
      _TemporaryArray.push(this._TotalLegateUserNewAccountsData);
      _TemporaryArray.push(this._TotalLegateUserVerifiedAccountsData);
      _TemporaryArray.push(this._TotalLegateUserRegisteredAccountsData);
      this._Status = 1;
      this._DataServiceService.SaveLegateUserDataToLocalStorage(_TemporaryArray);
      this._ChartDataToSend = this._DataServiceService.GetChartDataFromLocalStorage();
    }
    if (data === 'Tickets') {
      this._Status = null;
      let _TemporaryArray = [];
      _TemporaryArray.push({ Name: 'Tickets' });
      _TemporaryArray.push(this._TotalTicketsNewAccountsData);
      _TemporaryArray.push(this._TotalTicketsVerifiedAccountsData);
      _TemporaryArray.push(this._TotalTicketsRegisteredAccountsData);
      this._Status = 2;
      this._DataServiceService.SaveTicketsDataToLocalStorage(_TemporaryArray);
      this._ChartDataToSend = this._DataServiceService.GetChartDataFromLocalStorage();
    }
    if (data === 'Notifications') {
      this._Status = null;
      let _TemporaryArray = [];
      _TemporaryArray.push({ Name: 'Notifications' });
      _TemporaryArray.push(this._TotalNotificationsNewAccountsData);
      _TemporaryArray.push(this._TotalNotificationsVerifiedAccountsData);
      _TemporaryArray.push(this._TotalNotificationsRegisteredAccountsData);
      this._Status = 3;
      this._DataServiceService.SaveNotificationsDataToLocalStorage(_TemporaryArray);
      this._ChartDataToSend = this._DataServiceService.GetChartDataFromLocalStorage();
    }
  }
}
