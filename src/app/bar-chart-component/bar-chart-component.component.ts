import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DataServiceService } from '../Shared/Services/data-service.service';

@Component({
  selector: 'app-bar-chart-component',
  templateUrl: './bar-chart-component.component.html',
  styleUrls: ['./bar-chart-component.component.css']
})
export class BarChartComponentComponent implements OnInit ,OnChanges {
  @Input() ChartDataToSend:any

  _ChartData:any=[];
  series: ApexAxisChartSeries | any;
  chart: ApexAxisChartSeries | any;
  xaxis: ApexAxisChartSeries | any;
  title: ApexAxisChartSeries | any;
  colors: ApexAxisChartSeries | any;

  constructor(private _DataServiceService:DataServiceService) {}

  ngOnInit(): void {
    this._ChartData=this._DataServiceService.GetChartDataFromLocalStorage();
    this.InitializeChart(this._ChartData);
  }

  ngOnChanges(): void{
    this._ChartData=this.ChartDataToSend;
    this.InitializeChart(this._ChartData);
  }
  InitializeChart(_Data:any){
    this.series = [
        {
          name:'NewAccounts',
          data: [_Data[1][0].NewAccounts, _Data[1][1].NewAccounts, _Data[1][2].NewAccounts, _Data[1][3].NewAccounts, _Data[1][4].NewAccounts, _Data[1][5].NewAccounts, _Data[1][6].NewAccounts, _Data[1][7].NewAccounts, _Data[1][8].NewAccounts, _Data[1][9].NewAccounts, _Data[1][10].NewAccounts, _Data[1][11].NewAccounts]
        },
        {
          name:'VerifiedAccounts',
          data: [_Data[2][0].VerifiedAccounts, _Data[2][1].VerifiedAccounts, _Data[2][2].VerifiedAccounts, _Data[2][3].VerifiedAccounts, _Data[2][4].VerifiedAccounts, _Data[2][5].VerifiedAccounts, _Data[2][6].VerifiedAccounts, _Data[2][7].VerifiedAccounts, _Data[2][8].VerifiedAccounts, _Data[2][9].VerifiedAccounts, _Data[2][10].VerifiedAccounts, _Data[2][11].VerifiedAccounts]
        },
        {
          name:'RegisteredAccounts',
          data: [_Data[3][0].RegisteredAccounts, _Data[3][1].RegisteredAccounts, _Data[3][2].RegisteredAccounts, _Data[3][3].RegisteredAccounts, _Data[3][4].RegisteredAccounts, _Data[3][5].RegisteredAccounts, _Data[3][6].RegisteredAccounts, _Data[3][7].RegisteredAccounts, _Data[3][8].RegisteredAccounts, _Data[3][9].RegisteredAccounts, _Data[3][10].RegisteredAccounts, _Data[3][11].RegisteredAccounts]
        }
      ];
      this.chart = {
        height: 550,
        type: "bar"
      };
      this.title = {
        text: "Yearly Data"
      };
      this.xaxis = {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      };

      this.colors = ['#4e5053','#7B241C','#117A65']
      
  }
}
