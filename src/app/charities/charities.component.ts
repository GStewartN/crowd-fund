import { Component, OnInit } from '@angular/core';
import { Charity } from '../charity.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { CharityService } from '../charity.service';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css'],
  providers: [CharityService]
})
export class CharitiesComponent implements OnInit {
  charities: FirebaseListObservable<any[]>;

  addingNewCharity = false;

  constructor(private router: Router, private charityService: CharityService) { }

  ngOnInit() {
    this.charities = this.charityService.getCharities();
  }

  goToDetailPage(clickedCharity) {
    this.router.navigate(['charities', clickedCharity.$key])
  }

}
