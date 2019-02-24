import { Component, OnInit, ViewChild } from '@angular/core';
import {MapSeverityFilter } from '../../models/MapSeverityFilter'

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {

  severityFilter = new MapSeverityFilter(2, 4)
  constructor() { }

  ngOnInit() {
    this.setupSeverityFilter();
  }

  setupSeverityFilter() {

  }

}
