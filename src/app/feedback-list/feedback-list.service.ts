import { Wellbeing } from "../shared/wellbeing.model";
import { Subject } from "../../../node_modules/rxjs";

export class FeedbackListService {
  updatedWellbeing = new Subject<Wellbeing[]>();
  startedEditing = new Subject<number>();

  private overallWellbeing: Wellbeing[] = [
      new Wellbeing('Strawberries', 8),
      new Wellbeing('Avocado', 9)
      ];
      
  getWellbeing() {
    return this.overallWellbeing.slice();
  }

  getWellbeingState(index: number) {
    return this.overallWellbeing[index];
  }

  addWellbeing(wellbeing: Wellbeing) {
    this.overallWellbeing.push(wellbeing);
    this.updatedWellbeing.next(this.overallWellbeing.slice());
  }

  addStates(states: Wellbeing[]) {
 /* for (let state of states) {
      this.addWellbeing(state);
    } */
    this.overallWellbeing.push(...states);
    this.updatedWellbeing.next(this.overallWellbeing.slice());
  }

  updateState(index: number, newState: Wellbeing) {
    this.overallWellbeing[index] = newState;
    this.updatedWellbeing.next(this.overallWellbeing.slice()); 
  }

  deleteWellbeing(index: number) {
    this.overallWellbeing.splice(index,1);
    this.updatedWellbeing.next(this.overallWellbeing.slice());
  }
}

