import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'target',
  pure: false
})

export class TargetPipe implements PipeTransform {

  transform(input: Project[], desiredTarget){
    var output: Project[] = [];
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
