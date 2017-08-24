import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea.model';

@Pipe({
  name: 'idea',
  pure: false
})
export class IdeaPipe implements PipeTransform {

  transform(input: Idea[], desiredTarget){
    var output: Idea[] = [];
    if(desiredTarget === "below25"){
      for (var i = 0; i < input.length; i++){
        if (input[i].targetAmount < 25000){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTarget === "above25"){
      for (var i = 0; i < input.length; i++){
        if (input[i].targetAmount > 25000){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
