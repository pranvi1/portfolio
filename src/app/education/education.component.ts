import { Component } from '@angular/core';
import { Education } from '../models/education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Netaji Subhas University of Technology, Delhi, India", 
      subject: "B.Tech - Electronics and Communication Engineering",
      duration: "2019-2023",
      score: "7.5 GPA"
    },
    {
      institute: "Green Fields School", 
      subject: "Senior-Secondary School - Science",
      duration: "2017-2019",
      score: "96%"
    },
    {
      institute: "Green Fields School", 
      subject: "Secondary School",
      duration: "2015-2017",
      score: "10 CGPA"
    },

  ];
}
