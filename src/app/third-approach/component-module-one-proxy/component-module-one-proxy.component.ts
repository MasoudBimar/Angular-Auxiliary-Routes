import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component-module-one-proxy',
  standalone: true,
  imports:[RouterOutlet],
  templateUrl: './component-module-one-proxy.component.html',
  styleUrls: ['./component-module-one-proxy.component.scss']
})
export class ComponentModuleOneProxyComponent {
}
