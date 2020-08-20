import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

}

        //1.html {{goal}}
// export class AppComponent {
//   // title = 'goals';
//   goal = 'Watch Finding Nemo'
// }

        //2.html *ngFor list
// export class AppComponent {
//   goals:string[];

//   constructor(){
//     this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
//   } 
// }