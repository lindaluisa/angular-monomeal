import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Monomeal } from '../monomeal.model';

@Component({
  selector: 'app-monomeal-list',
  templateUrl: './monomeal-list.component.html'
})
export class MonomealListComponent implements OnInit {
  @Output() monomealWasSelected = new EventEmitter<Monomeal>();
  monomeals: Monomeal[] = [
    // tslint:disable-next-line:max-line-length
    new Monomeal('Strawberries', 'This is simply a berry test', 'https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg' ),
    // tslint:disable-next-line:max-line-length
    new Monomeal('Avocado', 'This is simply a avo test', 'data:image/jpeg;base64,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' )

  ];

  constructor() { }

  ngOnInit() {
  }

  onMonomealSelected(monomeal: Monomeal) {
    this.monomealWasSelected.emit(monomeal);
  }
}
