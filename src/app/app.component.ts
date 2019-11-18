import { Component } from '@angular/core';

@Component({
  selector: 'cam-balkon-root',
  templateUrl:'./app.component.html',
  styles: [':host{ width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between}'],
})
export class AppComponent {
  title = 'cam-balkon';
}
