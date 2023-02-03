import { Component, OnInit } from '@angular/core';
import projectData from '../../assets/json/project-data.json';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = projectData.data
  constructor() { }

  ngOnInit(): void {
  }

}
