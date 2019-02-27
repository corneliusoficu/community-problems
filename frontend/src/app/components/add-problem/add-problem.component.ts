/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  public problemDescription = "";
  public maxTextLengthProblemDescription = 5000;
  public problemTitle = "";

  public maxTextLengthProblemTitle = 200;
  public selectedLeveIndex = 2;

  public severityLevelsTable = {
    headers: ['#', 'Nivel', 'Descriere'],
    rows: [
      ['Critic', 'Probleme ce pot pune viata in pericol si asupra carora trebuie actionat imediat, ex: Scurgere de gaze, Risc de alunecare de teren.'],
      ['Major', 'Probleme severe ce ne afacteaza zi de zi, ex: Poluare, Drum impracticabil.'],
      ['Mediu', 'Probleme comune, ex: Haite de caini vagabonzi, Deversari de deseuri pe marginea drumului.'],
      ['Minor', 'Ex: Carosabil murdar.']
    ]
  }

  constructor() { }

  ngOnInit() {
    this.initializeGoogleMaps();
  }

  setLevelIndex(index) {
    this.selectedLeveIndex = index;
  }

  initializeGoogleMaps() {
    var mapProperties ={
      center: new google.maps.LatLng(47.0885000, 27.6157500),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
  }

  onSubmit() {
    window.scroll(0,0);
    this.validateInputs()
  }

  onReset() {
    window.scroll(0,0);
  }

  validateInputs() {
    
  }
}
