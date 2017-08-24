import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../idea.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.css'],
  providers: [IdeaService]
})
export class EditIdeaComponent implements OnInit {
  @Input() selectedIdea;

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
  }

  beginUpdatingIdea(selectedIdea) {
    this.ideaService.updateIdea(selectedIdea);
  }

  beginDeletingIdea(ideaToDelete) {
    this.ideaService.deleteIdea(ideaToDelete);
  }

}
