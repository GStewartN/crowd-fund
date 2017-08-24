import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  addingNewProject = false;
  filterByTarget: string = "allProjects";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

  showAddNewForm() {
    this.addingNewProject = true;
  }

  submitForm(title: string, description: string, managers: string, targetAmount: number, rewards: string) {
    var newProject = new Project(title, description, managers, targetAmount, rewards);
    this.projectService.addNewProject(newProject);
    this.addingNewProject = false;
  }

  onChange(optionFromMenu) {
    this.filterByTarget = optionFromMenu;
  }

}
