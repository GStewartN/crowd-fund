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

  addNewCharities(newCharity: Charity) {
    this.charities.push(newCharity);
  }

  getCharityById(charityId: string) {
    return this.database.object('charities/' + chartyId);
  }

}
