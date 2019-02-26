import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  public problemDescription = "";
  public maxTextLengthProblemDescription = 5000;
  
  constructor() { }

  ngOnInit() {
  }

}
