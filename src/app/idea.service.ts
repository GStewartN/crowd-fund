import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class IdeaService {
  ideas: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.ideas = database.list('ideas');
   }

   getIdeas() {
     return this.ideas;
   }

   addNewIdea(newIdea: Idea) {
     this.ideas.push(newIdea);
   }

   getIdeaById(ideaId: string) {
     return this.database.object('ideas/' + ideaId);
   }

   updateIdea(localUpdatedIdea) {
     var ideaEntryInFirebase = this.getIdeaById(localUpdatedIdea.$key);
     ideaEntryInFirebase.update({title: localUpdatedIdea.title, description: localUpdatedIdea.description, managers: localUpdatedIdea.managers, mvp: localUpdatedIdea.mvp, targetAmount: localUpdatedIdea.targetAmount, rewards: localUpdatedIdea.rewards});
   }

   deleteIdea(localIdeaToDelete) {
     var ideaEntryInFirebase = this.getIdeaById(localIdeaToDelete.$key);
     ideaEntryInFirebase.remove();
   }

}
