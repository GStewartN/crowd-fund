import { Component, OnInit, Input } from '@angular/core';
import { Charity } from '../charity.model';
import { CharityService } from '../charity.service';

@Component({
  selector: 'app-edit-charity',
  templateUrl: './edit-charity.component.html',
  styleUrls: ['./edit-charity.component.css'],
  providers: [CharityService]
})
export class EditCharityComponent implements OnInit {
  @Input() selectedCharity;

  constructor(private charityService: CharityService) { }

  ngOnInit() {
  }

  beginUpdatingCharity(selectedCharity) {
    this.charityService.updateCharity(selectedCharity);
  }

  beginDeletingCharity(charityToDelete) {
    this.charityService.deleteCharity(charityToDelete);
  }

}
