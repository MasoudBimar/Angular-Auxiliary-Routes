import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private _router: Router) {}

  changeRoute() {
    this._router.navigate(['', { outlets: { modal: 'profile' } }], {
      skipLocationChange: skipUrlChange,
    });
  }
}
