import { Component, OnInit } from '@angular/core';
import  articleJSON  from "../../assets/json/article-data.json"
@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {
  articles = articleJSON.data
  constructor() { }

  ngOnInit(): void {
  }

}
