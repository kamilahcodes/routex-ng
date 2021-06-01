import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-generator',
  templateUrl: './label-generator.component.html',
  styleUrls: ['./label-generator.component.css']
})
export class LabelGeneratorComponent implements OnInit {



	USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
      "parcel"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
