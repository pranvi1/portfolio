import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})

  export class PersonalInformationComponent  {
    myData: string[][] =[
      ["Name", "Pranvi Bhogal"],
      ["Age","22 years old."],
      ["Designation","Associate Product Manager"],
      ["Company","Biz2Credit Info Private Limited"],
      ["Location","Noida"],
      ["Email Address","pranvi.bhogal@biz2credit.com"],

    ];

    aboutMe: string[] = [
    'Hi, I am Pranvi Bhogal and I work as an Associate Product Manager at Biz2Credit.', 
    'I am passionate about exploring new technologies and leveraging my skills in management, with a love for marketing and excellent comunicatonal abilities, I thrive in bridging the gap between cutting edge technology and its potential users.' ,  
   ];
}
