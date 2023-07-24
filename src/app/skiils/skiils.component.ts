import { Component } from '@angular/core';
import { Skill } from '../models/skills.model';

@Component({
  selector: 'app-skiils',
  templateUrl: './skiils.component.html',
  styleUrls: ['./skiils.component.css']
})
export class SkiilsComponent {
  skills : Skill [] = [
    {
      name: "HTML",
      level: "Advanced",
      rating: 80,
    },
    {
      name: "CSS",
      level: "Advanced",
      rating: 70,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      rating: 50,
    },

  ];
}
