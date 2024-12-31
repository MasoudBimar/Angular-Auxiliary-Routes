import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component {
  constructor(private _router: Router) {}

  changeRoute() {
    this._router.navigate(['', { outlets: { modal: 'treasury/modals/home' } }], {
      skipLocationChange: skipUrlChange,
    });
  }
}
