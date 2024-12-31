import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-auxiliary2',
  templateUrl: './auxiliary2.component.html',
  styleUrls: ['./auxiliary2.component.scss']
})
export class Auxiliary2Component implements OnInit {
  public skipUrl = skipUrlChange;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  closePopup() {
    this._router.navigate(['', { outlets: { modal: null } }])
  }

  goToActivity(){
    this._router.navigate(['/', { outlets: {  modal:  ['profile','activity'] } }], { skipLocationChange: skipUrlChange});
  }

}
