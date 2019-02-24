import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MapSeverityFilter } from '../../models/MapSeverityFilter'
import { NouiFormatter } from "ng2-nouislider";
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css'],
})
export class MapFilterComponent implements OnInit {
  @ViewChild('severityFilter', {read: ElementRef}) slider: ElementRef;
  severityFilterRange;

  severityFilterConfig: any = {
    connect: true,
    start: [0, 3],
    step: 1,
    range: {
      min: 0,
      max: 3
    },
    pips: {
      mode: 'steps',
      density: 4,
      format: new SeverityLevelFormater()
    }
  };
  
  constructor() {};

  ngOnInit() {
    // this.func()
  }

  func() {
    const connect = this.slider.nativeElement.querySelectorAll('.noUi-connect');
    const classes = ['c-1-color', 'c-2-color', 'c-3-color'];
    console.log(connect.length);
    for (let i = 0; i < connect.length; i++) {
      connect[i].classList.add(classes[i]);
    }
  }
}

export class SeverityLevelFormater implements NouiFormatter {
  private strings: string[] = ['Minor', 'Mediu', 'Major', 'Critic'];

  to(value: number): string {
    value = Math.round(value);
    if (value < 0) {
      value = 0;
    }
    if (value >= this.strings.length) {
      value = this.strings.length - 1;
    }
    return this.strings[value];
  }

  from(value: string): number {
    let result = this.strings.indexOf(value);
    return result == -1 ? 0 : result;
  }
}
