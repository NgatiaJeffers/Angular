import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Engine } from './engine';
import { Wheels } from './wheels'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private engine: Engine, private wheels: Wheels) {

  }

  startEngine() {
    this.engine.start();
  }

  ngOnInit(): void {
  }

}
