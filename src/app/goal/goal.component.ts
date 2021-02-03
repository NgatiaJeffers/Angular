import { Quote } from './../quote-class/quote';
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { AlertService } from '../alert-service/alert.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {  

  goToUrl(id) {
    this.router.navigate(['/goals',id])
  }

  quote:Quote;

  goals: Goal[];
  alertService:AlertService;


  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1)
    }
  }

  deleteGoal(index) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("Goal has been deleted")
      }
  }


  constructor(goalsService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) {
    this.goals = goalsService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit(): void {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

}
