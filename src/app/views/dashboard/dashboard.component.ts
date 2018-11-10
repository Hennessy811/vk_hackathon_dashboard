import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [1680, 1000, 2000, 2100, 1200, 2500, 2400, 1680, 1200, 2000, 2100, 1200, 2500, 2400, 1680, 1800],
      label: 'Последние пожертвования фонду'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public currentSize = 'month';

  public mainChartElements = 31;
  public mainChartElements_Year = 7;
  public mainChartElements_Day = 24;


  public mainChartData1: Array<number> = [];
  public mainChartData1_Year: Array<number> = [];
  public mainChartData1_Day: Array<number> = [];


  public mainChartData1_total: number;
  public mainChartData1_Day_total: number;
  public mainChartData1_Year_total: number;

  public mainChartData2: Array<number> = [];
  public mainChartData2_Year: Array<number> = [];
  public mainChartData2_Day: Array<number> = [];


  public mainChartData2_total: number;
  public mainChartData2_Day_total: number;
  public mainChartData2_Year_total: number;
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Уникальных пользователей'
    },
    {
      data: this.mainChartData2,
      label: 'Нажатий "Показать контакты"'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [
    '01.11', '02.11', '03.11', '04.11', '05.11', '06.11', '07.11', '08.11', '09.11', '10.11',
    '11.11', '12.11', '13.11', '14.11', '15.11', '16.11', '17.11', '18.11', '19.11', '20.11',
    '21.11', '22.11', '23.11', '24.11', '25.11', '26.11', '27.11', '28.11', '29.11', '30.11', '31.11'
  ];

  public mainChartLabels_Day: Array<any> = [
    '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23'
  ];

  public mainChartLabels_Year: Array<any> = [
    'Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'
  ];

  public toggleMainChartSize(size: string) {
      this.currentSize = size;
      if (size === 'day') {
        // this.mainChartOptions.scales.yAxes[0].ticks.max = 25;
        this.mainChartData[0].data = this.mainChartData1_Day;
        this.mainChartData[1].data = this.mainChartData2_Day;
      } else
      if (size === 'year') {
        // this.mainChartOptions.scales.yAxes[0].ticks.max = 6000;
        this.mainChartData[0].data = this.mainChartData1_Year;
        this.mainChartData[1].data = this.mainChartData2_Year;
      } else
      if (size === 'month') {
        // this.mainChartOptions.scales.yAxes[0].ticks.max = 450;
        this.mainChartData[0].data = this.mainChartData1;
        this.mainChartData[1].data = this.mainChartData2;
      }
  }

  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor};
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 450
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartOptions_Day: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor};
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(25 / 5),
          max: 25
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartOptions_Year: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor};
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(6000 / 5),
          max: 6000
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };



  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public downloadFile () {
    window.location.href = 'https://docs.google.com/spreadsheets/export?id=1MtRI9VbvSmAZS4-UWnLlPYutHQc7BBNYvTIaU60CUZA&exportFormat=xlsx';
  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 350));
      this.mainChartData1_Day.push(this.random(5, 20));
      this.mainChartData1_Year.push(this.random(3000, 5500));
      this.mainChartData2.push(this.random(10, 70));
      this.mainChartData2_Day.push(this.random(0, 10));
      this.mainChartData2_Year.push(this.random(300, 1000));
      this.mainChartData3.push(65);
      this.mainChartData1_total = this.mainChartData1.reduce((prev, current, i, arr) => {
        return prev + current
      });
      this.mainChartData1_Day_total = this.mainChartData1_Day.reduce((prev, current, i, arr) => {
        return prev + current
      });
      this.mainChartData1_Year_total = this.mainChartData1_Year.reduce((prev, current, i, arr) => {
        return prev + current
      });
      this.mainChartData2_total = this.mainChartData2.reduce((prev, current, i, arr) => {
        return prev + current
      });
      this.mainChartData2_Day_total = this.mainChartData2_Day.reduce((prev, current, i, arr) => {
        return prev + current
      });
      this.mainChartData2_Year_total = this.mainChartData2_Year.reduce((prev, current, i, arr) => {
        return prev + current
      });
    }
  }
}
