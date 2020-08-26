import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.unshift(goal)    //unshift(goal) to put in first, push(goal) to put in last
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }



  goals: Goal[];
  alertService:AlertService;
  
  constructor(goalService:GoalService,alertService:AlertService) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  // constructor(){}

  ngOnInit() {
  }

}