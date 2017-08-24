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
  filterByTarget: string = "allCharities";

  constructor(private router: Router, private charityService: CharityService) { }

  ngOnInit() {
    this.charities = this.charityService.getCharities();
  }

  goToDetailPage(clickedCharity) {
    this.router.navigate(['charities', clickedCharity.$key])
  }

  showAddNewForm() {
    this.addingNewCharity = true;
  }

  submitForm(title: string, description: string, managers: string, targetAmount: number, ethics: string, mission: string) {
    var newCharity = new Charity(title, description, managers, targetAmount, ethics, mission);
    this.charityService.addNewCharity(newCharity);
    this.addingNewCharity = false;
  }

  onChange(optionFromMenu) {
    this.filterByTarget = optionFromMenu;
  }

}
