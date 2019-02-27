/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private _router:Router) { }

  ngOnInit() {
    this.initializeGoogleMaps()
  }

  initializeGoogleMaps() {
      var mapProperties ={
        center: new google.maps.LatLng(47.0885000, 27.6157500),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
  }

  goToAddProblem(){
    this._router.navigate(['./problem/add'])
  }
}
