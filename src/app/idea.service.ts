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

}
