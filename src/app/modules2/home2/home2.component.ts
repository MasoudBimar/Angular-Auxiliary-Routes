import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component {
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  changeRoute() {
    this._router.navigate(['', { outlets: { modal: 'treasury/modals/home' }, }], { skipLocationChange: skipUrlChange });
  }
}
