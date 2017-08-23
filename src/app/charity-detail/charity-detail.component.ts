import { Component, OnInit } from '@angular/core';
import { Charity } from '../charity.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharityService } from '../charity.service';

@Component({
  selector: 'app-charity-detail',
  templateUrl: './charity-detail.component.html',
  styleUrls: ['./charity-detail.component.css'],
  providers: [CharityService]
})
export class CharityDetailComponent implements OnInit {
  charityId: string;
  charityToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private charityService: CharityService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charityId = urlParameters['id'];
    });
    this.charityToDisplay = this.charityService.getCharityById(this.charityId);
  }

}
