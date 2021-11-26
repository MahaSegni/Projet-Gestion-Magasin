import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  technologies:any;
  constructor() { }

  ngOnInit(): void {
    this.technologies= [
      {name: "C#", likes: 0, dislikes: 0},
      {name: "ASP.NET", likes: 0, dislikes: 0},
      {name: "ASP.NET MVC", likes: 0, dislikes: 0},
      {name: "SQL", likes: 0, dislikes: 0},
      {name: "AngularJS", likes: 0, dislikes: 0},
      {name: "Angular 5", likes: 0, dislikes: 0},
      {name: "JQuery", likes: 0, dislikes: 0},
      {name: "JavaScript", likes: 0, dislikes: 0}

    ];
  }

}
