import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css'],
  providers: [IdeaService]
})
export class IdeaDetailComponent implements OnInit {
  ideaId: string;
  ideaToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ideaService: IdeaService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ideaId = urlParameters['id'];
    });
    this.ideaToDisplay = this.ideaService.getIdeaById(this.ideaId);
    }
  }
