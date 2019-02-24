import { Component, OnInit } from '@angular/core';
import { MapStatistic } from '../../models/MapStatistic';

@Component({
  selector: 'app-map-statistic',
  templateUrl: './map-statistic.component.html',
  styleUrls: ['./map-statistic.component.css']
})
export class MapStatisticComponent implements OnInit {

  mapStatistics: MapStatistic[]
  constructor() { }

  ngOnInit() {
    this.initializeMapStatistics();
  }

  initializeMapStatistics() {
    this.mapStatistics = [{
      name: "Probleme raportate",
      value: 10123
    },
    {
      name: "Probleme solutionate",
      value: 23
    },
    {
      name: "Numar de cetateni care au raportat",
      value: 450
    },
    {
      name: "Numar comentarii adaugate",
      value: 32
    }
  ]
  }

}
