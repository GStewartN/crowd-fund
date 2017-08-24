import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Router } from '@angular/router';
import { IdeaService } from '../idea.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  providers: [IdeaService]
})
export class IdeasComponent implements OnInit {
  ideas: FirebaseListObservable<any[]>;

  addingNewIdea = false;
  filterByTarget: string = "allIdeas";

  constructor(private router: Router, private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

  goToDetailPage(clickedIdea) {
    this.router.navigate(['ideas', clickedIdea.$key])
  }

  showAddNewForm() {
    this.addingNewIdea = true;
  }

  submitForm(title: string, description: string, managers: string, mvp: string, targetAmount: number, rewards: string) {
    var newIdea = new Idea(title, description, managers, mvp, targetAmount, rewards);
    this.ideaService.addNewIdea(newIdea);
    this.addingNewIdea = false;
  }

  onChange(optionFromMenu) {
    this.filterByTarget = optionFromMenu;
  }
}
