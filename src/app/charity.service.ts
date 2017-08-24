import { Injectable } from '@angular/core';
import { Charity } from './charity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharityService {
  charities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charities = database.list('charities');
  }

  getCharities() {
    return this.charities;
  }

  addNewCharity(newCharity: Charity) {
    this.charities.push(newCharity);
  }

  getCharityById(charityId: string) {
    return this.database.object('charities/' + charityId);
  }

  updateCharity(localUpdatedCharity) {
    var charityEntryInFirebase = this.getCharityById(localUpdatedCharity.$key);
    charityEntryInFirebase.update({title: localUpdatedCharity.title, description: localUpdatedCharity.description, managers: localUpdatedCharity.managers, targetAmount: localUpdatedCharity.targetAmount, ethics: localUpdatedCharity.ethics, mission: localUpdatedCharity.mission});
  }

  deleteCharity(localCharityToDelete) {
    var charityEntryInFirebase = this.getCharityById(localCharityToDelete.$key);
    charityEntryInFirebase.remove();
  }

}
