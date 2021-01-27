import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // One Way BInding
  clickCounter: number = 0;
  // Two Way Binding
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    }
    return myClasses;
  }

}
